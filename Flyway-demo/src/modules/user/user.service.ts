import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { RedisDictionary } from 'src/redis/RedisDictionary';
import { UserR } from 'src/entities/UserR';


@Injectable()
export class UserService {
  
  userRedis = new RedisDictionary<number, UserR>("user");  

  constructor(
    
    @InjectRepository(User) private readonly userDao: Repository<User> ){}

    
    // ----------------- Mysql TypOrm -------------

    async getUsers(): Promise<User[]>  {
      let users: User[] = await this.userDao.find();
      return users;
    }

    async getUserById(id:string): Promise<User>  {
      let user: User = await this.userDao.findOne(id);
      return user;
    }
    
    async setUser(user: User) {
      await this.userDao.insert(user); 
    }

    async updateUser(user: User) {
      await this.userDao.update({id:user.id},user);
    }
    
    async delUser(id:string) {
      await this.userDao.delete(id);
    }

    // --------------- redis ---------------------
    
    /* Redis */
    async getRUsers(){
      return this.userRedis.findAll();
    }

    async getRUsersById(id:number){
      return this.userRedis.findById(id);
    }

    async rUserDel(id:number){
      return this.userRedis.Remove(id);
    }

    async rAddUser(user: UserR){
      return this.userRedis.Add(user.id, user);
    }
    
}

import { ClientLogin, ClientModel, ClientSession } from 'src/models/client.model';
import { Client } from 'src/entities/client.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private readonly clientDao: Repository<Client>,
    private jwtService: JwtService,
  ) {}

  async getClientById(id: number): Promise<Client> {
    return await this.clientDao.findOne(id);
  }

  async getClients(): Promise<ClientModel[]> {
    //this.mapper.createMap(users, ClientModel);
    return await this.clientDao.find();
  }

  async GetTokenByLogin(login: ClientLogin): Promise<ClientSession> {
    const id=1; const password = "123456"; const email = "zekiri@yahoo.fr";
    if(login.password == password  && login.email == email){
      const payload = { username: email, userId: id};
      const tokenString = this.jwtService.sign(payload);    
      console.log(tokenString);
      return { "clientToken":tokenString, "clientId": id}
    }
  }
}

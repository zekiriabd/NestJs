import { Controller, Get, Post, Body, Res, UseInterceptors, UploadedFile, Param, Patch, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
import { UserR } from 'src/entities/UserR';


@Controller('api/user')
export class UserController {
    constructor(private readonly userService: UserService){}

 

  /*
    ----- Get and Post ----- 
  */
  @Get('getUsers')
  getUsers(): Promise<User[]>{
    return this.userService.getUsers();
  }

  @Get('getUser/:id')
  getUser(@Param('id') id: string ): Promise<User>{
    return this.userService.getUserById(id);
  }
 
  @Post('setUser')
  setUser(@Body() user:User):void {
    this.userService.setUser(user);
  }

  /*
    ----- Delete and Update ----- 
  */
 @Patch('updateUser')
 updateUser(@Body() user:User):void {
  this.userService.updateUser(user); 
 }

 @Delete('delUser/:id')
  delUser(@Param('id') id: string ):void {
    this.userService.delUser(id);
  }


  /*
     -----Excel download and upload ----- 
  */
  @Get('download')
  download(@Res() res) {
    const fielName = "user.xlsx";
    //res.setHeader('Content-Type', 'application/octet-stream');
    //res.attachment(fielName );
    return res.download("d:\\"+ fielName );
  }
  
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    const path = "d:\\" + file.originalname  ;
    let fileStream = createWriteStream(path); 
    fileStream.write(file.buffer); 
    fileStream.end();
  }

  
  /*
     ----- Redis Show Add Remove ----- 
  */
  
  /* Redis GetAll*/
  @Get('getRUsers')
  getRUsers(){
    return this.userService.getRUsers();
  } 

 /* Redis GetByID */
 @Get('getRUserById/:id')
 getRUserById(@Param('id') id: string){
   return this.userService.getRUsersById(Number(id));
 }  
 
 /* Redis GetByID */
   @Get('rUserDel/:id')
   rUserDel(@Param('id') id: string){
     return this.userService.rUserDel(Number(id));
   }  

   /* Redis rAddUser */
   @Post('rAddUser')
   rAddUser(@Body() user:UserR):void {
     this.userService.rAddUser(user);
   }
   
}
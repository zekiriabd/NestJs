import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomapperModule } from 'nestjsx-automapper';
import { Connection } from 'typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AutomapperModule.forRoot(),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}

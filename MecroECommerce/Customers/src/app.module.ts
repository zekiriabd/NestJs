import { Module } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { AppService } from './Services/app.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';


@Module({
  imports: [
    InMemoryDBModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

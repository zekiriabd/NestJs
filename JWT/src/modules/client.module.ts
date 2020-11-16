
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';
import { ClientController } from 'src/controllers/client.controller';
import { ClientService } from 'src/services/client.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client]),
    JwtModule.register({
      secret: 'superSecretKey@345',
      signOptions: { expiresIn: '60s'},
    }),
  ],
  controllers: [ClientController],
  providers: [ClientService, JwtStrategy],
})
export class ClientModule {}

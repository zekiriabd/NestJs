import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { ClientService } from 'src/services/client.service';
import { Client } from 'src/entities/client.entity';
import { ClientLogin, ClientSession } from 'src/models/client.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/client')
export class ClientController {
    constructor(private clientService: ClientService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get('')
    public getClients(): Promise<Client[]> {
        return this.clientService.getClients();
    }

    @Get('/:id')
    public getClientById(@Param('id') id: string ): Promise<Client> {
        return this.clientService.getClientById(+id);
    }

    @Post('login')
    public GetTokenByLogin(@Body() login: ClientLogin): Promise<ClientSession>{
        return this.clientService.GetTokenByLogin(login);
    }
}

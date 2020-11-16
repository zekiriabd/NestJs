import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../Services/app.service';
import { CustomerModel } from 'src/Models/CustomerModel';

@Controller('Customer')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  GetCustomers():CustomerModel[]{
    return  this.appService.GetCustomers();
  }
  
  @Get('/:id')
  GetCustomerById(@Param('id') id:number): CustomerModel
  {
    return this.appService.GetCustomerById(id);
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../Services/app.service';
import { OrderModel } from 'src/Models/OrderModel';

@Controller('order')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  GetOrders():OrderModel[]{
    return  this.appService.GetProducts();
  }
  
  @Get('/:id')
  GetOrdertById(@Param('id') id:number): OrderModel
  {
    return this.appService.GetProductById(id);
  }
}

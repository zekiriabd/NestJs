import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../Services/app.service';
import { ProductModel } from 'src/Models/ProductModel';

@Controller('product')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  GetProducts():Promise<ProductModel[]>{
    return  this.appService.GetProducts()
    
  }
  
  @Get('/:id')
  GetProductById(@Param('id') id:string): Promise<ProductModel>
  {
    return this.appService.GetProductById(id);
  }
}

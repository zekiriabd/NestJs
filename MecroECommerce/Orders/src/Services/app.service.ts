import { Injectable } from '@nestjs/common';
import { OrderModel } from 'src/Models/OrderModel';
import { IOrder } from 'src/Persistence/IOrder';
import { InMemoryDBModule, InMemoryDBService } from '@nestjs-addons/in-memory-db';


@Injectable()
export class AppService {

  constructor(private readonly productDbContext: InMemoryDBService<IOrder>){
    productDbContext.create({id:1,name:'Order1',price:111});
    productDbContext.create({id:2,name:'Order2',price:222});
    productDbContext.create({id:3,name:'Order3',price:333});
  }

  GetProducts(): OrderModel[] {
    return  this.productDbContext.getAll();
  }

  GetProductById(id:number): OrderModel
  {
      return this.productDbContext.get(id);
  }
}

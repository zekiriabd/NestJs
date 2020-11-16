import { Injectable } from '@nestjs/common';
import { CustomerModel } from 'src/Models/CustomerModel';
import { ICustomer } from 'src/Persistence/ICustomer';
import { InMemoryDBModule, InMemoryDBService } from '@nestjs-addons/in-memory-db';


@Injectable()
export class AppService {

  constructor(private readonly customertDbContext: InMemoryDBService<ICustomer>){
    customertDbContext.create({id:1,name:'Customer1',price:111});
    customertDbContext.create({id:2,name:'Customer2',price:222});
    customertDbContext.create({id:3,name:'Customer3',price:333});
  }

  GetCustomers(): CustomerModel[] {
    return  this.customertDbContext.getAll();
  }

  GetCustomerById(id:number): CustomerModel
  {
      return this.customertDbContext.get(id);
  }
}

import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface ICustomer extends InMemoryDBEntity {
     id :number,
     name:string,
     price:number,
}
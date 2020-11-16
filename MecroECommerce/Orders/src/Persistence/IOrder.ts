import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface IOrder extends InMemoryDBEntity {
     id :number,
     name:string,
     price:number,
}
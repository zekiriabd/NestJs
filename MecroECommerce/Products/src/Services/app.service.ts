import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductModel } from 'src/Models/ProductModel';
import { Product } from 'src/Persistence/Product';
import { Model } from 'mongoose';


@Injectable()
export class AppService {
 
  constructor(@InjectModel(Product.name) private productDbContext: Model<Product>) {
    productDbContext.create({name:'Product1',price:111});
    productDbContext.create({name:'Product2',price:222});
    productDbContext.create({name:'Product3',price:333});
  }

  async GetProducts():Promise<ProductModel[]> {
    return await this.productDbContext.find().exec();
  }

  async GetProductById(id:string): Promise<ProductModel>
  {
      return this.productDbContext.findById(id).exec();
  }
}

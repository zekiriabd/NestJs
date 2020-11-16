import { Module } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { AppService } from './Services/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product,ProductSchema } from './Persistence/Product';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://mongo:27017/ProductsConnection"), 
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

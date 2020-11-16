
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
     @Prop()
     id :string;
     @Prop()
     name:string;
     @Prop()
     price:number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
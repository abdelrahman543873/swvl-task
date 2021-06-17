import { ObjectID } from 'mongodb';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema({ timestamps: true, versionKey: false })
export class Car {
  _id?: ObjectID;
  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop()
  plate: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);

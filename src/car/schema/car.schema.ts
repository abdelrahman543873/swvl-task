import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema({ timestamps: true })
export class Car {
  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop()
  plate: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);

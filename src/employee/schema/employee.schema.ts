import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema({ timestamps: true, versionKey: false })
export class Employee {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  position: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);

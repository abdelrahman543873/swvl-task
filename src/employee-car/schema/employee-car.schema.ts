import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectID } from 'mongodb';
import { SchemasEnum } from 'src/_common/app.enum';

export type EmployeeCarDocument = EmployeeCar & Document;

@Schema({ timestamps: true })
export class EmployeeCar {
  @Prop({ type: ObjectID, ref: SchemasEnum.Employee, required: true })
  employee: string;

  @Prop({ type: ObjectID, ref: SchemasEnum.Car, required: true })
  car: string;

  @Prop({ default: 10, required: true })
  balance: number;
}

export const EmployeeCarSchema = SchemaFactory.createForClass(EmployeeCar);

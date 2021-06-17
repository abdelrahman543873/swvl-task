import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectID } from 'mongodb';
import { SchemasEnum } from 'src/_common/app.enum';

export type EmployeeCarDocument = EmployeeCar & Document;

@Schema({ timestamps: true, versionKey: false })
export class EmployeeCar {
  @Prop({ type: ObjectID, ref: SchemasEnum.Employee, required: true })
  employee: ObjectID;

  @Prop({ type: ObjectID, ref: SchemasEnum.Car, required: true })
  car: ObjectID;

  @Prop({ default: 10, required: true })
  balance: number;

  @Prop({ type: Date })
  lastAccess?: Date;
}

export const EmployeeCarSchema = SchemaFactory.createForClass(EmployeeCar);

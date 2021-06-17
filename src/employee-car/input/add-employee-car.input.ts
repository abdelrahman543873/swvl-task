import { IsMongoId, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { ObjectID } from 'mongodb';

export class AddEmployeeCarInput {
  @IsMongoId()
  employee: ObjectID;

  @IsMongoId()
  car: ObjectID;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  balance?: number;
}

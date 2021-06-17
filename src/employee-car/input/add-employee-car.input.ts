import { IsMongoId, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class AddEmployeeCarInput {
  @IsMongoId()
  employee: string;

  @IsMongoId()
  car: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  balance?: number;
}

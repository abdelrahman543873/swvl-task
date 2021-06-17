import { IsMongoId, IsString } from 'class-validator';

export class AddCarInput {
  @IsMongoId()
  employee: string;

  @IsString()
  brand: string;

  @IsString()
  plate: string;

  @IsString()
  model: string;
}

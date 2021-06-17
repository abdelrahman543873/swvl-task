import { IsMongoId, IsOptional, IsString } from 'class-validator';

export class UpdateCarInput {
  @IsMongoId()
  carId: string;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  plate?: string;

  @IsOptional()
  @IsString()
  model?: string;
}

import { IsMongoId } from 'class-validator';

export class PassInput {
  @IsMongoId()
  employee: string;

  @IsMongoId()
  car: string;
}

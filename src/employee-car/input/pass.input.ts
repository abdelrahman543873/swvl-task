import { IsMongoId } from 'class-validator';

export class PassInput {
  @IsMongoId()
  car: string;
}

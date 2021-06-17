import { IsMongoId } from 'class-validator';

export class DeleteCarInput {
  @IsMongoId()
  carId: string;
}

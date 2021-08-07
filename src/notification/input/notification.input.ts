import { IsNotEmpty, IsObject, IsString } from 'class-validator';
import { PayloadInterface } from '../notification.interface';

export class NotificationInput {
  @IsString()
  token: string;

  @IsNotEmpty()
  @IsObject()
  payload: PayloadInterface;
}

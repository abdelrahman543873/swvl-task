import { IsArray, IsNotEmpty, IsObject } from 'class-validator';
import { PayloadInterface } from '../notification.interface';

export class SendGroupNotificationInput {
  @IsArray()
  tokens: string[];

  @IsNotEmpty()
  @IsObject()
  payload: PayloadInterface;
}

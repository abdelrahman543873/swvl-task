import { IsPhoneNumber, IsString } from 'class-validator';

export class SmsNotificationInput {
  @IsString()
  text: string;

  @IsPhoneNumber()
  to: string;
}

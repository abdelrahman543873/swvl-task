import { IsPhoneNumber, IsString } from 'class-validator';

export class SmsGroupNotificationInput {
  @IsString()
  text: string;

  @IsPhoneNumber(null, { each: true })
  to: string[];
}

import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsObject } from 'class-validator';
import { PayloadInterface } from '../notification.interface';

export class SendGroupNotificationInput {
  @IsArray()
  tokens: string[];

  @IsNotEmpty()
  @IsObject()
  @ApiProperty({
    type: 'object',
    description:
      'this is the payload that is going to be passed to firebase admin for sending notifications',
    properties: {
      notification: {
        type: 'object',
        properties: { title: { type: 'string' }, body: { type: 'string' } },
      },
      data: {
        type: 'string',
        description: 'this is the data inside the notification',
      },
    },
  })
  payload: PayloadInterface;
}

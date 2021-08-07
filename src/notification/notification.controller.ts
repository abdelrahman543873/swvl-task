import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotificationService } from './notification.service';
import { SendGroupNotificationInput } from './input/send-group-notification.input';
import { NotificationInput } from './input/notification.input';
import { SmsNotificationInput } from './input/sms-notification.input';
import { SmsGroupNotificationInput } from './input/sms-group-notification.input';
import { Notification } from './model/notification.model';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @ApiTags('notification')
  @ApiResponse({
    status: 201,
    type: Notification,
    description:
      'sends notification to one device using firebase admin token , input is passed this way cause this is the interface of the firebase admin receives, as long as nodeEnv is testing , firebase will not send the notification',
  })
  @Post('sendNotification')
  async sendNotification(@Body() notification: NotificationInput) {
    return this.notificationService.sendNotification(
      notification.token,
      notification.payload,
    );
  }

  @ApiTags('notification')
  @ApiResponse({
    status: 201,
    type: [Notification],
    description:
      'sends notification to multiple fcm tokens , using firebase admin if nodeEnv is set to production',
  })
  @Post('sendGroupNotification')
  async sendGroupNotification(
    @Body() notification: SendGroupNotificationInput,
  ) {
    return this.notificationService.sendGroupNotification(notification);
  }

  @ApiTags('notification')
  @ApiResponse({
    status: 201,
    type: Notification,
    description: 'sends sms messages to one device using twilio',
  })
  @Post('sendSmsNotification')
  async sendSmsNotification(@Body() notification: SmsNotificationInput) {
    return this.notificationService.sendSmsNotification(notification);
  }

  @ApiTags('notification')
  @ApiResponse({
    status: 201,
    type: [Notification],
    description: 'sends sms messages to multiple devices using twilio',
  })
  @Post('sendSmsGroupNotification')
  async sendSmsGroupNotification(
    @Body() notification: SmsGroupNotificationInput,
  ) {
    return this.notificationService.sendSmsGroupNotification(notification);
  }
}

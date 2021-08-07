import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Notification } from 'rxjs';
import { NotificationService } from './notification.service';
import { SendGroupNotificationInput } from './input/send-group-notification.input';
import { NotificationInput } from './input/notification.input';
import { SmsNotificationInput } from './input/sms-notification.input';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @ApiTags('notification')
  @ApiResponse({ status: 201, type: Notification })
  @Post('sendNotification')
  async sendNotification(@Body() notification: NotificationInput) {
    return this.notificationService.sendNotification(
      notification.token,
      notification.payload,
    );
  }

  @ApiTags('notification')
  @ApiResponse({ status: 201, type: Notification })
  @Post('sendGroupNotification')
  async sendGroupNotification(
    @Body() notification: SendGroupNotificationInput,
  ) {
    return this.notificationService.sendGroupNotification(notification);
  }

  @ApiTags('notification')
  @ApiResponse({ status: 201, type: Notification })
  @Post('sendSmsNotification')
  async sendSmsNotification(@Body() notification: SmsNotificationInput) {
    return this.notificationService.sendSmsNotification(notification);
  }
}

import { client } from './twilio';
import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import { env } from './../_common/helpers/env';
import { PayloadInterface } from './notification.interface';
import { GroupNotificationInterface } from './notification.interface';
import { NotificationRepository } from './notification.repository';
import { SmsNotificationInput } from './input/sms-notification.input';
import { SmsGroupNotificationInput } from './input/sms-group-notification.input';

@Injectable()
export class NotificationService {
  constructor(private notificationRepo: NotificationRepository) {}
  async sendGroupNotification(notification: GroupNotificationInterface) {
    const response =
      env.NODE_ENV === 'production'
        ? await admin.messaging().sendMulticast(notification)
        : 'success';
    if (response)
      return await this.notificationRepo.addNotifications(notification);
  }

  async sendNotification(token: string, payload: PayloadInterface) {
    const response =
      env.NODE_ENV === 'production'
        ? await admin.messaging().sendToDevice(token, payload)
        : 'success';
    if (response)
      return await this.notificationRepo.addNotification({
        token,
        ...payload.notification,
      });
  }

  async sendSmsNotification(smsNotification: SmsNotificationInput) {
    const response =
      env.NODE_ENV === 'production'
        ? await client.messages.create({
            body: smsNotification.text,
            from: process.env.TWILIO_NUMBER,
            to: smsNotification.to,
          })
        : 'success';
    if (response)
      return await this.notificationRepo.addNotification({
        body: smsNotification.text,
        mobile: smsNotification.to,
      });
  }

  async sendSmsGroupNotification(notification: SmsGroupNotificationInput) {
    notification.to.forEach((number: string) => {
      env.NODE_ENV === 'production'
        ? client.messages.create({
            body: notification.text,
            from: process.env.TWILIO_NUMBER,
            to: number,
          })
        : 'success';
    });
    return await this.notificationRepo.addSmsNotifications({
      text: notification.text,
      to: notification.to,
    });
  }
}

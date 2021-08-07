import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/_common/generics/repository.abstract';
import { Notification, NotificationDocument } from './model/notification.model';
import { SmsGroupNotificationInput } from './input/sms-group-notification.input';
import {
  NotificationInterface,
  GroupNotificationInterface,
} from './notification.interface';

@Injectable()
export class NotificationRepository extends BaseRepository<Notification> {
  constructor(
    @InjectModel(Notification.name)
    private notificationSchema: Model<NotificationDocument>,
  ) {
    super(notificationSchema);
  }

  async addNotification(notification: NotificationInterface) {
    return this.notificationSchema.create(notification);
  }

  async addNotifications(notification: GroupNotificationInterface) {
    const notifications = notification.tokens.map(token => {
      return {
        token: token,
        body: notification.payload.notification.body,
        title: notification.payload.notification.title,
      };
    });
    return this.notificationSchema.insertMany(notifications);
  }

  async addSmsNotifications(notification: SmsGroupNotificationInput) {
    const notifications = notification.to.map(phoneNumber => {
      return {
        mobile: phoneNumber,
        body: notification.text,
      };
    });
    return this.notificationSchema.insertMany(notifications);
  }
}

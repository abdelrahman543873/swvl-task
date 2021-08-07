import { NotificationRepo } from '../../test/notification/notification-test-repo';
import * as faker from 'faker';
import { ObjectID } from 'mongodb';
import { Notification } from './model/notification.model';
import { userFactory } from '../user/user.factory';

interface NotificationType {
  user?: ObjectID;
  token?: string;
  title?: string;
  body?: string;
}

export const buildNotificationParams = async (
  obj: NotificationType,
): Promise<Notification> => {
  return {
    user: obj.user || (await userFactory({}))._id,
    token: obj.token || faker.internet.mac(),
    title: obj.title || faker.random.word(),
    body: obj.body || faker.random.words(),
  };
};

export const notificationsFactory = async (
  count = 10,
  obj: NotificationType,
): Promise<Notification[]> => {
  const notifications: Notification[] = [];
  for (let i = 0; i < count; i++) {
    notifications.push(await buildNotificationParams(obj));
  }
  return (await NotificationRepo()).addMany(notifications);
};

export const notificationFactory = async (
  obj: NotificationType,
): Promise<Notification> => {
  const params: Notification = await buildNotificationParams(obj);
  return (await NotificationRepo()).add(params);
};

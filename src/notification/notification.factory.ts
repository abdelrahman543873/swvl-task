import { NotificationRepo } from '../../test/notification/notification-test-repo';
import * as faker from 'faker';
import { Notification } from './model/notification.model';

interface NotificationType {
  mobile?: string;
  token?: string;
  title?: string;
  body?: string;
}

export const buildNotificationParams = (
  obj: NotificationType,
): Notification => {
  return {
    mobile: obj.mobile || faker.phone.phoneNumber('+20100#######'),
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
    notifications.push(buildNotificationParams(obj));
  }
  return (await NotificationRepo()).addMany(notifications);
};

export const notificationFactory = async (
  obj: NotificationType,
): Promise<Notification> => {
  const params: Notification = buildNotificationParams(obj);
  return (await NotificationRepo()).add(params);
};

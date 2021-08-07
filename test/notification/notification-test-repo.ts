import { moduleRef } from 'test/before-test-run';
import { NotificationRepository } from '../../src/notification/notification.repository';

export const NotificationRepo = async (): Promise<NotificationRepository> =>
  (await moduleRef()).get<NotificationRepository>(NotificationRepository);

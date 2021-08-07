import { ObjectId } from 'mongoose';
export interface GroupNotificationInterface {
  payload: PayloadInterface;
  tokens: string[];
}

export interface PayloadInterface {
  notification: { title: string; body: string };
  data: Record<any, any>;
}

export interface NotificationInterface {
  title?: string;
  body: string;
  user?: ObjectId;
}

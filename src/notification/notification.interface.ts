import { ObjectId } from 'mongoose';
export interface GroupNotificationInterface {
  payload: PayloadInterface;
  tokens: string[];
}

export interface PayloadInterface {
  notification: { title: string; body: string };
  data?: Record<any, any>;
}

export interface NotificationInterface {
  body: string;
  title?: string;
  token?: string;
  user?: ObjectId;
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectID } from 'mongodb';

export type NotificationDocument = Notification & Document;

@Schema({ versionKey: false })
export class Notification {
  _id?: ObjectID;

  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true, trim: true })
  body: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);

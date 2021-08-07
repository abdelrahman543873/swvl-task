import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectID } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';

export type NotificationDocument = Notification & Document;

@Schema({ versionKey: false })
export class Notification {
  _id?: ObjectID;

  @Prop()
  @ApiProperty()
  mobile?: string;

  @Prop()
  @ApiProperty()
  token?: string;

  @Prop()
  @ApiProperty()
  title?: string;

  @Prop({ required: true, trim: true })
  @ApiProperty()
  body: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);

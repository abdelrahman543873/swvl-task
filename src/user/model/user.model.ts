import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectID } from 'mongodb';

export type UserDocument = User & Document;

@Schema({ versionKey: false })
export class User {
  _id?: ObjectID;

  @Prop({ required: true, unique: true })
  mobile: string;

  @Prop()
  fcmToken?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

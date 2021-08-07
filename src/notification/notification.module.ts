import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationRepository } from './notification.repository';
import { NotificationController } from './notification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Notification, NotificationSchema } from './model/notification.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Notification.name, schema: NotificationSchema },
    ]),
  ],
  providers: [NotificationService, NotificationRepository],
  exports: [NotificationService],
  controllers: [NotificationController],
})
export class NotificationModule {}

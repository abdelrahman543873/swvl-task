import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationRepository } from './notification.repository';
import { NotificationController } from './notification.controller';

@Module({
  providers: [NotificationService, NotificationRepository],
  exports: [NotificationService],
  controllers: [NotificationController],
})
export class NotificationModule {}

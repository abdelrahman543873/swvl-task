import { Module } from '@nestjs/common';
import { DataBaseModule } from './_common/database/database.module';
import { NotificationModule } from './notification/notification.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DataBaseModule, NotificationModule, UserModule],
})
export class AppModule {}

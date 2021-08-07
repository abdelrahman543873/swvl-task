import { Module } from '@nestjs/common';
import { DataBaseModule } from './_common/database/database.module';
import { NotificationModule } from './notification/notification.module';
import { UserModule } from './user/user.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    // used for throttling requests cause the number of requests per minute is limited
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    DataBaseModule,
    NotificationModule,
    UserModule,
  ],
})
export class AppModule {}

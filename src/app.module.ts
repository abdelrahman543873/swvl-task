import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { CarModule } from './car/car.module';
import { DataBaseModule } from './_common/database/database.module';
import { EmployeeCarModule } from './employee-car/employee-car.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [DataBaseModule, EmployeeModule, CarModule, EmployeeCarModule, NotificationModule],
})
export class AppModule {}

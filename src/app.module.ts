import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { CarModule } from './car/car.module';
import { DataBaseModule } from './_common/database/database.module';

@Module({
  imports: [DataBaseModule, EmployeeModule, CarModule],
})
export class AppModule {}

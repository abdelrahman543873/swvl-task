import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeCarRepository } from './employee-car.repository';
import { EmployeeCar, EmployeeCarSchema } from './schema/employee-car.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EmployeeCar.name, schema: EmployeeCarSchema },
    ]),
  ],
  providers: [EmployeeCarRepository],
  exports: [EmployeeCarRepository],
})
export class EmployeeCarModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeCarRepository } from './employee-car.repository';
import { EmployeeCar, EmployeeCarSchema } from './schema/employee-car.schema';
import { EmployeeCarController } from './employee-car.controller';
import { EmployeeCarService } from './employee-car.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EmployeeCar.name, schema: EmployeeCarSchema },
    ]),
  ],
  controllers: [EmployeeCarController],
  providers: [EmployeeCarRepository, EmployeeCarService],
  exports: [EmployeeCarRepository],
})
export class EmployeeCarModule {}

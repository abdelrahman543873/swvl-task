import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './schema/car.schema';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarRepository } from './car.repository';
import { EmployeeCarModule } from '../employee-car/employee-car.module';
import { EmployeeModule } from '../employee/employee.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }]),
    EmployeeCarModule,
    EmployeeModule,
  ],
  controllers: [CarController],
  providers: [CarService, CarRepository],
})
export class CarModule {}

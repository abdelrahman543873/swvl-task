import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './schema/car.schema';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarRepository } from './car.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  controllers: [CarController],
  providers: [CarService, CarRepository],
})
export class CarModule {}

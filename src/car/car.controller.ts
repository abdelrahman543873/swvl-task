import { Body, Controller, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { AddCarInput } from './input/add-car.input';
import { Car } from './schema/car.schema';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post('add')
  async addCar(@Body() input: AddCarInput): Promise<Car> {
    return this.carService.addCar(input);
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarService } from './car.service';
import { AddCarInput } from './input/add-car.input';
import { Car } from './schema/car.schema';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @ApiTags('car')
  @ApiResponse({ status: 201, type: AddCarInput })
  @Post('add')
  async addCar(@Body() input: AddCarInput): Promise<Car> {
    return this.carService.addCar(input);
  }

  @ApiTags('car')
  @ApiResponse({ status: 200, type: [Car] })
  @Get('list')
  async getCars(): Promise<Car[]> {
    return await this.carService.getCars();
  }
}

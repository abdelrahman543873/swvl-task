import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddCarInput } from './input/add-car.input';
import { Car, CarDocument } from './schema/car.schema';
import { BaseRepository } from '../_common/generics/repository.abstract';
import { UpdateCarInput } from './input/update-car.input';

@Injectable()
export class CarRepository extends BaseRepository<Car> {
  constructor(
    @InjectModel(Car.name)
    private readonly carSchema: Model<CarDocument>,
  ) {
    super(carSchema);
  }

  async addCar(input: AddCarInput): Promise<Car> {
    return this.carSchema.create(input);
  }

  async getCars(): Promise<Car[]> {
    return await this.carSchema.find({});
  }

  async updateCar(input: UpdateCarInput): Promise<Car> {
    return await this.carSchema.findOneAndUpdate({ _id: input.carId }, input, {
      new: true,
      lean: true,
    });
  }
}

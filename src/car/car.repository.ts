import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument } from './schema/car.schema';

@Injectable()
export class CarRepository {
  constructor(
    @InjectModel(Car.name)
    private readonly carSchema: Model<CarDocument>,
  ) {}
}

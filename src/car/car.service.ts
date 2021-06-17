import { Injectable } from '@nestjs/common';
import { CarRepository } from './car.repository';

@Injectable()
export class CarService {
  constructor(private readonly CarRepo: CarRepository) {}
}

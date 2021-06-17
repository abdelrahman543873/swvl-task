import { CarRepo } from './../../test/car/car-test-repo';
import * as faker from 'faker';
import { Car } from './schema/car.schema';

interface CarType {
  brand?: string;
  plate?: string;
  model?: string;
}

export const buildCarParams = (obj: CarType = {}): Car => {
  return {
    brand: obj.brand || faker.random.words(),
    plate: obj.plate || faker.random.words(),
    model: obj.model || faker.random.words(),
  };
};

export const carsFactory = async (
  count = 10,
  obj: CarType = {},
): Promise<Car[]> => {
  const cars: Car[] = [];
  for (let i = 0; i < count; i++) {
    cars.push(buildCarParams(obj));
  }
  return (await CarRepo()).addMany(cars);
};

export const carFactory = async (obj: CarType = {}): Promise<Car> => {
  const params: Car = buildCarParams(obj);
  return (await CarRepo()).add(params);
};

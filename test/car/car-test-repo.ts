import { moduleRef } from 'test/before-test-run';
import { CarRepository } from '../../src/car/car.repository';

export const CarRepo = async (): Promise<CarRepository> =>
  (await moduleRef()).get<CarRepository>(CarRepository);

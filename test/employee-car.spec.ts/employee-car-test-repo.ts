import { moduleRef } from 'test/before-test-run';
import { EmployeeCarRepository } from '../../src/employee-car/employee-car.repository';

export const EmployeeCarRepo = async (): Promise<EmployeeCarRepository> =>
  (await moduleRef()).get<EmployeeCarRepository>(EmployeeCarRepository);

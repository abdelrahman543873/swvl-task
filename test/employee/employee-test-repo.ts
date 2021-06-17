import { moduleRef } from 'test/before-test-run';
import { EmployeeRepository } from '../../src/employee/employee.repository';

export const EmployeeRepo = async (): Promise<EmployeeRepository> =>
  (await moduleRef()).get<EmployeeRepository>(EmployeeRepository);

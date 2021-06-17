import * as faker from 'faker';
import { Employee } from './schema/employee.schema';
import { EmployeeRepo } from '../../test/employee/employee-test-repo';

interface EmployeeType {
  name?: string;
  age?: number;
  position?: string;
}

export const buildEmployeeParams = (obj: EmployeeType = {}): Employee => {
  return {
    name: obj.name || faker.random.words(),
    position: obj.position || faker.random.words(),
    age: obj.age || faker.datatype.number(),
  };
};

export const employeesFactory = async (
  count = 10,
  obj: EmployeeType = {},
): Promise<Employee[]> => {
  const faqs: Employee[] = [];
  for (let i = 0; i < count; i++) {
    faqs.push(buildEmployeeParams(obj));
  }
  return (await EmployeeRepo()).addMany(faqs);
};

export const employeeFactory = async (
  obj: EmployeeType = {},
): Promise<Employee> => {
  const params: Employee = buildEmployeeParams(obj);
  return (await EmployeeRepo()).add(params);
};

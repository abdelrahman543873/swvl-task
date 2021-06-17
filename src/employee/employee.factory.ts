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
    age: obj.age || faker.datatype.number(150),
  };
};

export const employeesFactory = async (
  count = 10,
  obj: EmployeeType = {},
): Promise<Employee[]> => {
  const employees: Employee[] = [];
  for (let i = 0; i < count; i++) {
    employees.push(buildEmployeeParams(obj));
  }
  return (await EmployeeRepo()).addMany(employees);
};

export const employeeFactory = async (
  obj: EmployeeType = {},
): Promise<Employee> => {
  const params: Employee = buildEmployeeParams(obj);
  return (await EmployeeRepo()).add(params);
};

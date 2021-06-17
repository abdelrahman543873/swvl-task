import { ObjectID } from 'mongodb';
import * as faker from 'faker';
import { carFactory } from 'src/car/car.factory';
import { EmployeeCar } from './schema/employee-car.schema';
import { employeeFactory } from '../employee/employee.factory';
import { EmployeeCarRepo } from '../../test/employee-car.spec.ts/employee-car-test-repo';

interface EmployeeCarType {
  employee?: ObjectID;
  car?: ObjectID;
  balance?: number;
  lastAccess?: Date;
}

export const buildEmployeeCarParams = async (
  obj: EmployeeCarType = {},
): Promise<EmployeeCar> => {
  return {
    employee: obj.employee || (await employeeFactory())._id,
    car: obj.car || (await carFactory())._id,
    balance: obj.balance || 10,
    lastAccess: obj.lastAccess || faker.date.recent(),
  };
};

export const carsFactory = async (
  count = 10,
  obj: EmployeeCarType = {},
): Promise<EmployeeCar[]> => {
  const employeeCars: EmployeeCar[] = [];
  for (let i = 0; i < count; i++) {
    employeeCars.push(await buildEmployeeCarParams(obj));
  }
  return (await EmployeeCarRepo()).addMany(employeeCars);
};

export const employeeCarFactory = async (
  obj: EmployeeCarType = {},
): Promise<EmployeeCar> => {
  const params: EmployeeCar = await buildEmployeeCarParams(obj);
  return (await EmployeeCarRepo()).add(params);
};

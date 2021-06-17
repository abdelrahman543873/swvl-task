import { Injectable } from '@nestjs/common';
import { CarRepository } from './car.repository';
import { AddCarInput } from './input/add-car.input';
import { EmployeeCarRepository } from '../employee-car/employee-car.repository';
import { EmployeeRepository } from 'src/employee/employee.repository';
import { BaseHttpException } from '../_common/exceptions/base-http-exception';
import { Car } from './schema/car.schema';

@Injectable()
export class CarService {
  constructor(
    private readonly carRepo: CarRepository,
    private readonly employeeCar: EmployeeCarRepository,
    private readonly employee: EmployeeRepository,
  ) {}

  async addCar(input: AddCarInput): Promise<Car> {
    const car = await this.carRepo.addCar(input);
    const employee = await this.employee.getEmployee(input.employee);
    if (!employee) throw new BaseHttpException('EN', 600);
    await this.employeeCar.addEmployeeCar({
      car: car._id,
      employee: employee._id,
    });
    return car;
  }
}

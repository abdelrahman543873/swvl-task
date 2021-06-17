import { Injectable } from '@nestjs/common';
import { EmployeeCarRepository } from './employee-car.repository';
import { PassInput } from './input/pass.input';
import { BaseHttpException } from '../_common/exceptions/base-http-exception';

@Injectable()
export class EmployeeCarService {
  constructor(private readonly employeeCarRepo: EmployeeCarRepository) {}

  async pass(input: PassInput) {
    const employeeCar = await this.employeeCarRepo.getEmployeeCar(input);
    if (!employeeCar) throw new BaseHttpException('EN', 602);
    if (employeeCar.balance - 4 < 0) throw new BaseHttpException('EN', 602);
    const timeDifference =
      Date.now() - new Date(employeeCar.lastAccess).getTime();
    // this expression is to get the minutes of the date difference
    if (timeDifference / 60000 <= 1) {
      employeeCar.lastAccess = new Date();
      await employeeCar.save();
      return employeeCar;
    }
    return await this.employeeCarRepo.pass(input);
  }
}

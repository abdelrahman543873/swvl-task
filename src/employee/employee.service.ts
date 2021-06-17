import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from './employee.repository';
import { EmployeeRegisterInput } from './input/employee-register.input';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepo: EmployeeRepository) {}

  async register(input: EmployeeRegisterInput) {
    return this.employeeRepo.register(input);
  }
}

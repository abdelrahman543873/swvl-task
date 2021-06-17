import { Employee } from './schema/employee.schema';
import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from './employee.repository';
import { EmployeeRegisterInput } from './input/employee-register.input';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepo: EmployeeRepository) {}

  async register(input: EmployeeRegisterInput): Promise<Employee> {
    return this.employeeRepo.register(input);
  }

  async getEmployees(): Promise<Employee[]> {
    return this.employeeRepo.getEmployees();
  }
}

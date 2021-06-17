import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './schema/employee.schema';
import { EmployeeRegisterInput } from './input/employee-register.input';
import { BaseRepository } from '../_common/generics/repository.abstract';

@Injectable()
export class EmployeeRepository extends BaseRepository<Employee> {
  constructor(
    @InjectModel(Employee.name)
    private readonly employeeSchema: Model<EmployeeDocument>,
  ) {
    super(employeeSchema);
  }

  async register(input: EmployeeRegisterInput) {
    return await this.employeeSchema.create(input);
  }
}

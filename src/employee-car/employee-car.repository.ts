import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/_common/generics/repository.abstract';
import { EmployeeCar, EmployeeCarDocument } from './schema/employee-car.schema';
import { AddEmployeeCarInput } from './input/add-employee-car.input';

@Injectable()
export class EmployeeCarRepository extends BaseRepository<EmployeeCar> {
  constructor(
    @InjectModel(EmployeeCar.name)
    private readonly employeeCarSchema: Model<EmployeeCarDocument>,
  ) {
    super(employeeCarSchema);
  }

  async addEmployeeCar(input: AddEmployeeCarInput): Promise<EmployeeCar> {
    return await this.employeeCarSchema.create(input);
  }
}

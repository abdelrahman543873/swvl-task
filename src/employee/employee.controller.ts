import { Body, Controller, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeRegisterInput } from './input/employee-register.input';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('register')
  async register(@Body() input: EmployeeRegisterInput) {
    return await this.employeeService.register(input);
  }
}

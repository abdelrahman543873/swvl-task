import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';
import { EmployeeRegisterInput } from './input/employee-register.input';
import { Employee } from './schema/employee.schema';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @ApiTags('employee')
  @ApiResponse({ status: 201, type: EmployeeRegisterInput })
  @Post('register')
  async register(@Body() input: EmployeeRegisterInput): Promise<Employee> {
    return await this.employeeService.register(input);
  }
}

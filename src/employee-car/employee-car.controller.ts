import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmployeeCarService } from './employee-car.service';
import { PassInput } from './input/pass.input';
import { EmployeeCar } from './schema/employee-car.schema';

@Controller('car')
export class EmployeeCarController {
  constructor(private readonly employeeCarService: EmployeeCarService) {}

  @ApiTags('car')
  @ApiResponse({ status: 201, type: EmployeeCar })
  @Post('pass')
  async pass(@Body() input: PassInput) {
    return await this.employeeCarService.pass(input);
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { EmployeeCarService } from './employee-car.service';
import { PassInput } from './input/pass.input';

@Controller('car')
export class EmployeeCarController {
  constructor(private readonly employeeCarService: EmployeeCarService) {}

  @Post('pass')
  async pass(@Body() input: PassInput) {
    return await this.employeeCarService.pass(input);
  }
}

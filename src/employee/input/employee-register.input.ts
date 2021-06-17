import { IsInt, IsString, Max, Min } from 'class-validator';

export class EmployeeRegisterInput {
  @IsString()
  name: string;

  @Min(10)
  @Max(150)
  @IsInt()
  age: number;

  @IsString()
  position: string;
}

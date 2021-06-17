import { testRequest } from 'test/request';
import { HTTP_METHODS_ENUM } from 'test/request.methods.enum';
import { employeeFactory } from '../../src/employee/employee.factory';
import { buildCarParams, carFactory } from '../../src/car/car.factory';
import { ADD_CAR } from '../endpoints/car';
describe('add car suite case', () => {
  it('should add car', async () => {
    const car = buildCarParams();
    const employee = await employeeFactory();
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: ADD_CAR,
      variables: { ...car, employee: employee._id },
    });
    expect(res.body.brand).toBe(car.brand);
  });

  it("should throw error if employee doesn't exist", async () => {
    const car = buildCarParams();
    const carItem = await carFactory();
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: ADD_CAR,
      variables: { ...car, employee: carItem._id },
    });
    expect(res.body.statusCode).toBe(600);
  });
});

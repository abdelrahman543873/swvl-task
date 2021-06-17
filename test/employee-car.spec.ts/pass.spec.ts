import { testRequest } from 'test/request';
import { HTTP_METHODS_ENUM } from 'test/request.methods.enum';
import { PASS } from '../endpoints/car';
import { employeeCarFactory } from '../../src/employee-car/employee-car.factory';
describe('pass car suite case', () => {
  it('should pass car', async () => {
    const employeeCar = await employeeCarFactory();
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: PASS,
      variables: { employee: employeeCar.employee, car: employeeCar.car },
    });
    expect(res.body.balance).toBe(6);
  });

  it('should pass car without subtracting fees if time less than an minute', async () => {
    const employeeCar = await employeeCarFactory({
      lastAccess: new Date(Date.now() - 30 * 1000),
    });
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: PASS,
      variables: { employee: employeeCar.employee, car: employeeCar.car },
    });
    expect(res.body.balance).toBe(10);
  });
});

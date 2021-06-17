import { GET_EMPLOYEES } from 'test/endpoints/employee';
import { testRequest } from 'test/request';
import { HTTP_METHODS_ENUM } from 'test/request.methods.enum';
import { employeesFactory } from '../../src/employee/employee.factory';
describe('get employees suite case', () => {
  it('should get all employees', async () => {
    await employeesFactory();
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: GET_EMPLOYEES,
    });
    expect(res.body.length).toBeGreaterThanOrEqual(10);
  });
});

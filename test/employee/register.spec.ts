import { EMPLOYEE_REGISTER } from 'test/endpoints/employee';
import { testRequest } from 'test/request';
import { HTTP_METHODS_ENUM } from 'test/request.methods.enum';
import { buildEmployeeParams } from '../../src/employee/employee.factory';
describe('register employee suite case', () => {
  it('should register employee', async () => {
    const variables = buildEmployeeParams();
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: EMPLOYEE_REGISTER,
      variables,
    });
    expect(res.body.name).toBe(variables.name);
  });
});

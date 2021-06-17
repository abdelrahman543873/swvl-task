import { testRequest } from 'test/request';
import { HTTP_METHODS_ENUM } from 'test/request.methods.enum';
import { GET_CARS } from '../endpoints/car';
import { carsFactory } from '../../src/employee-car/employee-car.factory';
describe('get cars suite case', () => {
  it('should get cars', async () => {
    await carsFactory();
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: GET_CARS,
    });
    expect(res.body.length).toBeGreaterThanOrEqual(10);
  });
});

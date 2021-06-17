import { testRequest } from 'test/request';
import { HTTP_METHODS_ENUM } from 'test/request.methods.enum';
import { carFactory } from '../../src/car/car.factory';
import { DELETE_CAR } from '../endpoints/car';
describe('delete car suite case', () => {
  it('delete  car', async () => {
    const car = await carFactory();
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.DELETE,
      url: DELETE_CAR,
      variables: { carId: car._id },
    });
    expect(res.body.brand).toBe(car.brand);
  });
});

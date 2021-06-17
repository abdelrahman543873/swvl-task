import { UPDATE_CAR } from 'test/endpoints/car';
import { testRequest } from 'test/request';
import { HTTP_METHODS_ENUM } from 'test/request.methods.enum';
import { buildCarParams, carFactory } from '../../src/car/car.factory';
describe('update car suite case', () => {
  it('should update car', async () => {
    const carParams = buildCarParams();
    const car = await carFactory();
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.PUT,
      url: UPDATE_CAR,
      variables: { ...carParams, carId: car._id },
    });
    expect(res.body.brand).toBe(carParams.brand);
  });
});

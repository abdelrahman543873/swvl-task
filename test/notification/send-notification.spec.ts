import { NOTIFICATION } from 'test/endpoints/notification';
import { testRequest } from 'test/request';
import { HTTP_METHODS_ENUM } from 'test/request.methods.enum';
import { buildNotificationParams } from '../../src/notification/notification.factory';
describe('send notification suite case', () => {
  it('send notification', async () => {
    const variables = await buildNotificationParams({});
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: NOTIFICATION,
      variables: {
        token: variables.token,
        payload: {
          notification: { title: variables.title, body: variables.body },
        },
      },
    });
    expect(res.body.token).toBe(variables.token);
    expect(res.body.title).toBe(variables.title);
    expect(res.body.body).toBe(variables.body);
  });
});

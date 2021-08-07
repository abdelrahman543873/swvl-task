import { NOTIFICATIONS } from 'test/endpoints/notification';
import { testRequest } from 'test/request';
import { HTTP_METHODS_ENUM } from 'test/request.methods.enum';
import { buildNotificationParams } from '../../src/notification/notification.factory';
describe('send notification suite case', () => {
  it('send notification', async () => {
    const variables = await buildNotificationParams({});
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: NOTIFICATIONS,
      variables: {
        tokens: [variables.token],
        payload: {
          notification: { title: variables.title, body: variables.body },
        },
      },
    });
    expect(res.body[0].token).toBe(variables.token);
  });
});

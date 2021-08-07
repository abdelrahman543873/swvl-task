import { SMS_GROUP_NOTIFICATION } from 'test/endpoints/notification';
import { testRequest } from 'test/request';
import { HTTP_METHODS_ENUM } from 'test/request.methods.enum';
import { buildNotificationParams } from '../../src/notification/notification.factory';
describe('send notification suite case', () => {
  it('send notification', async () => {
    const variables = await buildNotificationParams({});
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: SMS_GROUP_NOTIFICATION,
      variables: {
        to: [variables.mobile],
        text: variables.body,
      },
    });
    expect(res.body[0].mobile).toBe(variables.mobile);
  });
});

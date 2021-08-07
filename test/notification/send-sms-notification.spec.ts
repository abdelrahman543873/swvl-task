import { testRequest } from 'test/request';
import { HTTP_METHODS_ENUM } from 'test/request.methods.enum';
import { buildNotificationParams } from '../../src/notification/notification.factory';
import { SMS_NOTIFICATION } from '../endpoints/notification';
describe('send sms notification suite case', () => {
  it('send sms notification', async () => {
    const variables = await buildNotificationParams({});
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: SMS_NOTIFICATION,
      variables: {
        text: variables.body,
        to: variables.mobile,
      },
    });
    expect(res.body.mobile).toBe(variables.mobile);
  });
});

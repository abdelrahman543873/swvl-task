import { env } from './../_common/helpers/env';
import twilio from 'twilio';
export const client = twilio(env.TWILIO_ACCOUNT_SID, env.TWILIO_TOKEN);

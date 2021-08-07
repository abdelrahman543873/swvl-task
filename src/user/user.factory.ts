import * as faker from 'faker';
import { User } from './model/user.model';
import { UserRepo } from '../../test/user/user-test-repo.';

interface UserType {
  mobile?: string;
  fcmToken?: string;
}

export const buildUserParams = (obj: UserType): User => {
  return {
    mobile: obj.mobile || faker.phone.phoneNumber(),
    fcmToken: obj.fcmToken || faker.internet.mac(),
  };
};

export const usersFactory = async (
  count = 10,
  obj: UserType,
): Promise<User[]> => {
  const users: User[] = [];
  for (let i = 0; i < count; i++) {
    users.push(buildUserParams(obj));
  }
  return (await UserRepo()).addMany(users);
};

export const userFactory = async (obj: UserType): Promise<User> => {
  const params: User = buildUserParams(obj);
  return (await UserRepo()).add(params);
};

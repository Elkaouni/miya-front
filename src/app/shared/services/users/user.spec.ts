import { User } from './user';

describe('User', () => {
  it('should create a User instance', () => {
    // @ts-ignore
    expect(new User()).toBeTruthy();
  });
});
import {User} from '@models/Users';

test('it should be ok', () => {
  const user = new User()
  user.name = "Rafael";

  expect(user.name).toEqual('Rafael')
})
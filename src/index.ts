/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/8 23:12
 * @Email: fred.zhen@gmail.com
 */
import { User } from './models/User';

const user = new User({ id: 1 });

user.on('change', () => {
  console.log(user);
});

user.fetch();

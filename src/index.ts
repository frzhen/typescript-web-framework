/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/8 23:12
 * @Email: fred.zhen@gmail.com
 */
import { User } from './models/User';

const user = new User({ name: "Anna", age: 40});

user.events.on('change', () => {
  console.log('change');
});
user.events.on('click', () => {
  console.log('click');
});
user.events.on('change', () => {
  console.log('change again');
});
user.events.trigger('change');
console.log(user);

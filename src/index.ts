/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/8 23:12
 * @Email: fred.zhen@gmail.com
 */
import { User } from './models/User';

const user = new User({ name: "Anna", age: 40});

console.log(user.get('name'));
user.on('click', () => {
  console.log("click, click");
});
user.trigger('click')
console.log(user);

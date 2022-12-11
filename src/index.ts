/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/8 23:12
 * @Email: fred.zhen@gmail.com
 */
import { User } from './models/User';

const user = new User({ name: "Anna", age: 45 });

user.on('change', () => {
  console.log("first change");
});

// user.on('change', () => {
//   console.log("second change");
// });
//
user.on('click', () => {
  console.log("click, click");
});


user.set({ name: "someone new"});


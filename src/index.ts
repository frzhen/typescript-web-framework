/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/8 23:12
 * @Email: fred.zhen@gmail.com
 */
import { User } from './models/User';

const user = User.build({id: 1});

user.on('change', ()=>{
  console.log(user);
})

// user.on('save', () => {
//   console.log(user);
// });
//
// user.save();

user.fetch();
console.log(user.isAdminUser());

// const user2 = User.build({name:"Fred", age: 45});
// user2.save();

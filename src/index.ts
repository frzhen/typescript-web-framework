/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/8 23:12
 * @Email: fred.zhen@gmail.com
 */
import { User } from "./models/User";

const user = new User({name:'Fred', age:45});
console.log(user.get('name'));
console.log(user.get('age'));


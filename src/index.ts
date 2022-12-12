/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/8 23:12
 * @Email: fred.zhen@gmail.com
 */
import { Collection } from "./models/Collections";
import { User } from "./models/User";
import { UserProps } from "./datatypes";


const collection = new Collection<User, UserProps>(
  "http://localhost:3001/users",
  (json: UserProps) => User.build(json)
);
collection.on('change', ()=> {
  console.log(collection);
})
collection.fetch()

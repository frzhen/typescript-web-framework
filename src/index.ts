/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/8 23:12
 * @Email: fred.zhen@gmail.com
 */
import { User } from "./models/User";


const collection = User.buildCollection();
collection.on('change', ()=> {
  console.log(collection);
})
collection.fetch()

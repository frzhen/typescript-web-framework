/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/8 23:12
 * @Email: fred.zhen@gmail.com
 */
import { Collection } from "./models/Collections";


const collection = new Collection("http://localhost:3001/users");
collection.on('change', ()=> {
  console.log(collection);
})
collection.fetch()

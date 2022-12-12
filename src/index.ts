/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/8 23:12
 * @Email: fred.zhen@gmail.com
 */

import { User } from "./models/User";
import {UserEdit} from "./views/UserEdit";


const user = User.build({ name: 'Name', age: 20})

const rootElement = document.getElementById('root');
if (rootElement) {
  const userEdit = new UserEdit(
    rootElement,
    user
  );
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error("The root element is not present!");
}




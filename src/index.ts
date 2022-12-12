/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/8 23:12
 * @Email: fred.zhen@gmail.com
 */
import { UserForm } from './views/UserForm';
import { User } from "./models/User";


const user = User.build({ name: 'Name', age: 20})

const rootElement = document.getElementById('root');
if (rootElement) {
  const userForm = new UserForm(
    rootElement,
    user
  );
  userForm.render();
} else {
  throw new Error("The root element is not present!");
}




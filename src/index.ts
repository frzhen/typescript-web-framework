/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/8 23:12
 * @Email: fred.zhen@gmail.com
 */
import { UserForm } from './views/UserForm';


const userForm = new UserForm(
  document.getElementById('root')
);

userForm.render();

/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/8 23:12
 * @Email: fred.zhen@gmail.com
 */

import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import {rootUrl} from "./env";
import {UserProps} from "./datatypes";
import {Collection} from "./models/Collections";
import {UserList} from "./views/UserList";


const user = User.build({ name: 'Name', age: 20})
const users = new Collection(rootUrl,
  (json: UserProps) => {
    return User.build(json);
  })

user.on('save', () => {
  users.fetch();
});

const controlPanelElement = document.getElementById('control-panel');
if (controlPanelElement) {
  new UserEdit(controlPanelElement, user).render();
} else {
  throw new Error("The root element is not present!");
}
const userListElement = document.getElementById("user-list");
if (userListElement) {
  const userList = new UserList(userListElement, users);
  users.on('change', () => {
    userList.render();
  });
}

users.fetch();






/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/12 14:36
 * @Email: fred.zhen@gmail.com
 */
import { RegionMapObject, UserProps } from "../datatypes";
import { View } from "./View";
import { User } from "../models/User";
import {UserShow} from "./UserShow";
import {UserForm} from "./UserForm";


export class UserEdit extends View<User, UserProps> {
  template(): string {
    return `
       <div class="card">
        <div class="card-header">
          <div class="card-header-title is-justify-content-center">
             <h1 class="is-size-1 has-text-weight-bold mb-4">User Form</h1>
          </div>
        </div>
        <div id="user-detail" class="card-content"></div>
        <div id="user-form" class="card-footer"></div>
       </div>
    `;
  }

  regionsMap(): RegionMapObject {
    return {
      userShow: '#user-detail',
      userForm: '#user-form'
    };
  }

  onRender() {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }
}

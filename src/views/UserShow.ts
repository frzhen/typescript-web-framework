/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/12 14:36
 * @Email: fred.zhen@gmail.com
 */
import { View } from './View'
import { UserProps } from "../datatypes";
import { User } from "../models/User";

export class UserShow extends View<User, UserProps> {

  template(): string {
    return `
          <p class="is-size-3">User Name: ${this.model.get('name')}</p>
          <p class="is-size-3">User Age: ${this.model.get('age')}</p>
    `;
  }


}


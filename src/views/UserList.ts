/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/13 13:42
 * @Email: fred.zhen@gmail.com
 */
import {CollectionView} from "./CollectionView";
import {UserProps} from "../datatypes";
import {User} from "../models/User";
import {UserShow} from "./UserShow";


export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }

}

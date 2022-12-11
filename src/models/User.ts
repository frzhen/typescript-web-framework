/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/9 00:44
 * @Email: fred.zhen@gmail.com
 */
import { Model } from "./Model";
import { UserProps } from "../datatypes";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";



const rootUrl: string = "http://localhost:3001/users";
export class User extends Model<UserProps> {
  static build(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  isAdminUser(): boolean {
    return this.get('id') === 1;
  }
}

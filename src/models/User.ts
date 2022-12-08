/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/9 00:44
 * @Email: fred.zhen@gmail.com
 */
import { UserProps } from "../datatypes/UserProps";

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): (string | number) {
    return this.data[propName];
  }
}

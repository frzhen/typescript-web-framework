/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/12 10:22
 * @Email: fred.zhen@gmail.com
 */

import {User} from "./User";
import {Eventing} from "./Eventing";
import axios, {AxiosResponse} from "axios";
import {UserProps} from "../datatypes";

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor( public rootUrl: string) {}
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl)
      .then((response:AxiosResponse)=>{
        response.data.forEach((value: UserProps)=>{
          const user = User.build(value);
          this.models.push(user);
        });
        this.events.triggerAll();
      });
  }
}

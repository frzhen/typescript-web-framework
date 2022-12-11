/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/9 00:44
 * @Email: fred.zhen@gmail.com
 */
import { UserProps } from "../datatypes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { AxiosResponse } from "axios";
import { Attributes } from "./Attributes";


const rootUrl: string = "http://localhost:3001/users/";
export class User{
  private attributes: Attributes<UserProps>;
  private events: Eventing = new Eventing();
  private sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get get(){
    return this.attributes.get;
  }
  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.triggerAll();
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
  fetch = (): void => {
    const id = this.get('id');
    if ( typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }
    this.sync.fetch(id)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save = (): void => {
    this.sync.save(this.attributes.getAllAttributes())
      .then((): void => {
        this.trigger('save');
      }).catch(()=>{
        this.trigger('error');
    });
  }

}

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
  public attributes: Attributes<UserProps>;
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get get(){
    return this.attributes.get;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
  fetch(): void {
    const id: number | undefined = this.attributes.get('id');
    if (id){
      this.sync.fetch(id).then((response: AxiosResponse) => {
        console.log(response.data);
      })
    } else {
      console.log("This id doesn't exist");
    }
  }


}

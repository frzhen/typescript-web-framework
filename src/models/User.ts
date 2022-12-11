/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/9 00:44
 * @Email: fred.zhen@gmail.com
 */
import { UserProps } from "../datatypes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import {AxiosResponse} from "axios";


const rootUrl: string = "http://localhost:3001/users/";
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  constructor(private data: UserProps) {}

  get(propName: string): (string | number) {
    // @ts-ignore
    return this.data[propName];
  }

  set(update: UserProps): void {
    // @ts-ignore
    Object.assign(this.data, update);
  }

  fetch(): void {
    const id: number | undefined = this.data.id;
    if (id){
      this.sync.fetch(id).then((response: AxiosResponse) => {
        console.log(response.data);
      })
    } else {
      console.log("This id doesn't exist");
    }
  }

  save():void {
    this.sync.save(this.data).then((response: AxiosResponse) => {
      console.log(response.status)
    })
  }

}

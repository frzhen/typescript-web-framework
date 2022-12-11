/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/9 00:44
 * @Email: fred.zhen@gmail.com
 */
import { UserProps } from "../datatypes";
import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class User {
  public events: Eventing = new Eventing();
  private server_url: string = "http://localhost:3001/users/"

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
    const url: string =  `${this.server_url}${this.get('id')}`
    console.log(url);
    axios.get(url)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    if (this.get('id')) {
      axios.put(`${this.server_url}${this.get('id')}`, this.data)
        .then((response:AxiosResponse) => {
          console.log(`${response.status}: ${response.statusText}`);
        });
    } else {
      axios.post(this.server_url, this.data)
        .then((response:AxiosResponse) => {
          console.log(`${response.status}: ${response.statusText}`);
        });
    }
  }
}

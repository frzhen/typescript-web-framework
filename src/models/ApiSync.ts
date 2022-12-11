/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/11 10:50
 * @Email: fred.zhen@gmail.com
 */
import axios, { AxiosPromise } from "axios";
import { HasId } from "../datatypes";

export class ApiSync<T extends HasId> {
  constructor(private rootUrl: string) {
  }

  fetch= (id: number): AxiosPromise => {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save = (data: T): AxiosPromise => {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
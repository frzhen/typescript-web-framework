/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/11 21:23
 * @Email: fred.zhen@gmail.com
 */
import {AxiosPromise} from "axios";

export interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;

}

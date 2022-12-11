/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/11 16:33
 * @Email: fred.zhen@gmail.com
 */
import {ModelAttributes} from "../interfaces/ModelAttributes";

export class Attributes<T> implements ModelAttributes<T>{
  constructor(private data: T) {}

  // arrow function or bound function resolved this issue
  get = <K extends keyof T>(key: K): T[K] => {
    // @ts-ignore
    return this.data[key];
  }

  getAllAttributes = (): T => {
    return this.data;
  }

  set = (update: T): void => {
    // @ts-ignore
    Object.assign(this.data, update);
  }
}

/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/11 16:33
 * @Email: fred.zhen@gmail.com
 */

export class Attributes<T> {
  constructor(private data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    // @ts-ignore
    return this.data[key];
  }

  set(update: T): void {
    // @ts-ignore
    Object.assign(this.data, update);
  }
}

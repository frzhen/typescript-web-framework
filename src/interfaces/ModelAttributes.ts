/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/11 21:22
 * @Email: fred.zhen@gmail.com
 */
export interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  getAllAttributes(): T;

}

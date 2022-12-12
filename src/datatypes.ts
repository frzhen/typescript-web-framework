/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/10 10:34
 * @Email: fred.zhen@gmail.com
 */
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
export type Callback = () => void;

export type EventList = {[key: string]: Callback[]};

export type EventMapObject = {[key: string]: () => void };

export interface HasId {
  id?: number;
}

/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/11 21:27
 * @Email: fred.zhen@gmail.com
 */
import {Callback} from "../datatypes";
export interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
  triggerAll():void;
}

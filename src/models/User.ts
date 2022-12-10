/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/9 00:44
 * @Email: fred.zhen@gmail.com
 */
import { UserProps, Callback, Events } from "../datatypes";

export class User {
  events: Events = {};
  constructor(private data: UserProps) {}

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    // @ts-ignore
    Object.assign(this.data, update);
  }

  private getEventMethods(eventName: string): Callback[] {
    if (eventName in this.events) {
      return this.events[eventName];
    } else {
      return [];
    }
  }

  // register event handler
  on(eventName: string, callback: Callback): void {
    // retrieve event's callback list
    const handlers = this.getEventMethods(eventName);
    handlers.push(callback); // add on new callback to the event handler list
    this.events[eventName] = handlers
  }

  trigger(eventName: string): void {
    const handlers = this.getEventMethods(eventName);
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach(callback => {
      callback();
    })
  }
}

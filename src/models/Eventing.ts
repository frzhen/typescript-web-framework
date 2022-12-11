/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/11 10:07
 * @Email: fred.zhen@gmail.com
 */
import { Callback, EventList } from "../datatypes";

export class Eventing{
  private event_dict: EventList = {};

  private getEventMethods(eventName: string): Callback[] {
    if (eventName in this.event_dict) {
      return this.event_dict[eventName];
    } else {
      return [];
    }
  }
  // register event handler
  on = (eventName: string, callback: Callback): void => {
    // retrieve event's callback list
    const handlers = this.getEventMethods(eventName);
    handlers.push(callback); // add on new callback to the event handler list
    this.event_dict[eventName] = handlers
  }

  trigger = (eventName: string): void => {
    const handlers = this.getEventMethods(eventName);
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach(callback => {
      callback();
    })
  }

  triggerAll = (): void => {
    Object.keys(this.event_dict).forEach((event_iter) => {
      this.trigger(event_iter);
    });
  }
}

/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/12 22:09
 * @Email: fred.zhen@gmail.com
 */

import { EventMapObject } from "../datatypes";
import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    this.reactivity()
  }

  reactivity(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  abstract template(): string;

  abstract eventsMap(): EventMapObject;
  render(): void {
    // Empty out page
    this.parent.innerHTML = '';
    // render or re-render the page
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      })
    }
  }


}

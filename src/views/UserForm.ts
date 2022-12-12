/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/12 14:36
 * @Email: fred.zhen@gmail.com
 */
import { EventMapObject } from "../datatypes";


export class UserForm {

  constructor(public parent: Element) {}

  eventsMap(): EventMapObject {
    return {
      'click:button': this.onButtonClick,
      'mouseover:h1': this.onHeaderMouseOver
    };
  }

  onHeaderMouseOver(): void {
    console.log('H1 is hovered over');
  }
  onButtonClick():void {
    console.log('Hi, there');
  }
  template(): string {
    return `
      <div>
        <h1 class="is-size-1 mb-4">User Form</h1>
        <div class="columns">
          <div class="column is-two-thirds">
            <input class="input" />
          </div>
          <div class="column">
            <button class="button is-primary">Click Me</button>
          </div>
        </div>
        
        
      </div>
    `;
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
  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}

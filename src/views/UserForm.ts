/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/12 14:36
 * @Email: fred.zhen@gmail.com
 */
import { EventMapObject } from "../datatypes";
import { User } from "../models/User";


export class UserForm {

  constructor(public parent: Element, public model: User) {}

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
      <div class="card">
        <div class="card-header">
          <div class="card-header-title is-justify-content-center">
             <h1 class="is-size-1 has-text-weight-bold mb-4">User Form</h1>
          </div>
        </div>
        <div class="card-content">
        <p class="is-size-3">User Name: ${this.model.get('name')}</p>
        <p class="is-size-3">User Age: ${this.model.get('age')}</p>
        </div>
        <div class="card-footer">
          <div class="card-footer-item">
             <input class="input" />
          </div>
          <div class="card-footer-item">
            <button class="button is-primary">Update Name</button>
          </div>
          <div class="card-footer-item">
           <button class="button is-info">Random Age</button>
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

/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/12 14:36
 * @Email: fred.zhen@gmail.com
 */
import { EventMapObject } from "../datatypes";
import { User } from "../models/User";


export class UserForm {

  constructor(public parent: Element, public model: User) {
    this.reactivity()
  }

  reactivity(): void {
    this.model.on('change', () => {
    this.render();
    });
  }
  eventsMap(): EventMapObject {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:#set-name': this.onSetNameClick,
      'click:#save-user': this.onSaveClick

    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }
  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({name: name});
    } else {
      throw new Error("The input tag was not found in the parent elements");
    }

  }
  onSaveClick = (): void => {
    this.model.save();
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
             <button id="set-name" class="button is-primary ml-2">Set Name</button>
          </div>
          <div class="card-footer-item">
           <button class="set-age button is-info">Set Random Age</button>
          </div>
           <div class="card-footer-item">
            <button id="save-user" class="button is-danger">Save</button>
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
    // Empty out page
    this.parent.innerHTML = '';
    // render or re-render the page
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}

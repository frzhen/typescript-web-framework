/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/12 14:36
 * @Email: fred.zhen@gmail.com
 */
import { EventMapObject, UserProps } from "../datatypes";
import { User } from "../models/User";
import { View } from "./View";


export class UserForm extends View<User, UserProps> {

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
          <div class="card-footer-item">
             <input class="input" placeholder="${this.model.get('name')}" />
             <button id="set-name" class="button is-primary ml-2">Set Name</button>
          </div>
          <div class="card-footer-item">
           <button class="set-age button is-info">Set Random Age</button>
          </div>
          <div class="card-footer-item">
            <button id="save-user" class="button is-danger">Save</button>
          </div>  
    `;
  }
}

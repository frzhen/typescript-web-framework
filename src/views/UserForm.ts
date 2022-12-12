/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/12 14:36
 * @Email: fred.zhen@gmail.com
 */


export class UserForm {

  constructor(public parent: Element) {}
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

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.parent.append(templateElement.content);
  }
}

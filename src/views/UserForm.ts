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
        <h1>User Form</h1>
        <input />
      </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.parent.append(templateElement.content);
  }
}

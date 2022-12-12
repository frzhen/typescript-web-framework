/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/12 22:09
 * @Email: fred.zhen@gmail.com
 */

import {EventMapObject, RegionMapObject, RegionObject} from "../datatypes";
import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {

  regions: RegionObject = {};
  constructor(public parent: Element, public model: T) {
    this.reactivity()
  }

  reactivity(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  abstract template(): string;

  regionsMap(): RegionMapObject {
    return {};
  }

  eventsMap(): EventMapObject{
    return {}
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element
      }
    }
  }

  onRender(): void {
    // this is where you do view nesting
  }
  render(): void {
    // Empty out page
    this.parent.innerHTML = '';
    // render or re-render the page
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    //map sub region of html element
    this.mapRegions(templateElement.content);
    // add in sub html element
    this.onRender();
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

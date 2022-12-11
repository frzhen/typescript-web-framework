/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/11 21:20
 * @Email: fred.zhen@gmail.com
 */
import {AxiosResponse} from "axios";
import {ModelAttributes} from "../interfaces/ModelAttributes";
import {Events} from "../interfaces/Events";
import {Sync} from "../interfaces/Sync";
import {HasId} from "../datatypes";

export class Model<T extends HasId> {

  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.triggerAll();
  }

  on = this.events.on;

  trigger = this.events.trigger;

  fetch(): void {
    const id = this.get('id');
    if ( typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }
    this.sync.fetch(id)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    this.sync.save(this.attributes.getAllAttributes())
      .then((): void => {
        this.trigger('save');
      }).catch(()=>{
      this.trigger('error');
    });
  }
}

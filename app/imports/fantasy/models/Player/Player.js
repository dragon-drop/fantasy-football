import { uuid } from '/imports/fantasy/lib/mixins';
/* PLAYER
  * (Entity)
  * ---------
  * Unique id: String
  * Name: String
  * Price: number
  * position: Position
*/

export class Player {
  constructor({_id, name, price, position}) {
    this._id = _id || uuid();
    // has name?
    this.name = name;
    // has price?
    this.price = price;
    // has position?
    this.position = position;
  }
}

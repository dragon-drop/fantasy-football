import { Players } from '/imports/infrastructure/collections';
import { Player }  from './Player';

export class PlayerRepo {
  static insert(player) {
    Players.insert(player);
    return player;
  }

  static find(_id) {
    const rawPlayer = Players.findOne(_id);

    return new Player(rawPlayer);
  }
}

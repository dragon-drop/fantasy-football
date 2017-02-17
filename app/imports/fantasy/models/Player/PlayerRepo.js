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

  static all() {
    const rawPlayers = Players.find().fetch();
    console.log( {rawPlayers});
    return rawPlayers.map((rawPlayer) => {
      return new Player(rawPlayer);
    });
  }
}

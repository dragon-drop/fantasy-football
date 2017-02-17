import { uuid } from '../lib/mixins';
import { Errors } from '../lib/Errors';
import { settings } from '../lib/settings';
import { Formation } from './Formation';

/* LINEUP
 * Value Object
 * ------------
  * has many Players
  * has a target Formation
  * has a current Formation
  */

export class Lineup {
  constructor(options) {
    this.players = options.players || [];
    this.targetFormation = options.targetFormation || new Formation(settings.defaultFormation);
    this.currentFormation = options.current || new Formation();
  }

  getCurrentFormation() {
    const formation = new Formation();    
    this.players.forEach((player) => {
        formation[player.position]++;
    });
    return formation;
  }
}

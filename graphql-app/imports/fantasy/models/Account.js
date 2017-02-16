import { uuid } from '../lib/mixins';
import { settings } from '../lib/settings';
import { Errors } from '../lib/Errors';
import { Lineup } from './Lineup';

/* ACCOUNT
 * Entity
 * ------
 * unique id
 * lineup: Lineup
 * budgetRemaining: Float
 */

export class Account {
  constructor() {
    this.id = uuid();
    this.lineup = new Lineup();
    this.budgetRemaining = settings.totalAmountToSpend;
  }

  addPlayerToLineup(player) {
    // TODO: check player object

    // check budget
    const { budgetRemaining, lineup } = this;

    if (budgetRemaining < player.price) {
      throw new Error(Errors.BUDGET);
    }

    let { currentFormation, targetFormation, players } = lineup;

    const availablePositions = {};

    Object.keys(targetFormation).forEach((position) => {
      availablePositions[position] = targetFormation[position] - currentFormation[position];
    });

    if (availablePositions[player.position] > 0) {
      players.push(player);
      currentFormation[player.position]++;
    } else {
      // error
    }

  }
}

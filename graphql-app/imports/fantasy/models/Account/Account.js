import { Errors } from '/imports/fantasy/lib/Errors';

/* ACCOUNT
 * Entity
 * ------
 * _id: uuid
 * lineup: Lineup
 * budgetRemaining: Float
 */

export class Account {
  constructor(options) {
    const { _id, lineup, budgetRemaining } = options;
    this._id = _id;
    this.lineup = lineup;
    this.budgetRemaining = budgetRemaining;
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

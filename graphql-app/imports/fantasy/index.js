import { Account } from './models/Account/Account';
import { AccountFactory } from './models/Account/AccountFactory';
import { AccountRepo } from './models/Account/AccountRepo';

import { Player } from './models/Player/Player';
import { Positions } from './lib/Positions';
import { Errors } from './lib/Errors';

/* PlayerRepository
 * add(player)
 * remove(id)
 * findById(id)
 */

const PlayerRepo = {
  count: 0,
  players: {},
  add(player) {
    this.players[player.id] = player;
    this.count++;

    return player;
  },
  remove(playerId) {
    this.players[playerId] = null;
    this.count--;
  },
  findById(playerId) {
    return this.players[playerId];
  },
};

/* Service */
function AddPlayerToLineup(playerId, accountId) {
  const player = PlayerRepo.findById(playerId);
  const account = AccountRepo.findById(accountId);

  console.log({account});

  account.addPlayerToLineup(player);

  return account.lineup;
}

// Mocks for creating seed data quickly

const Mocks = {
  Player(count) { /* count just to give a unique name for now */
    return new Player(
      `Mr ${count}`,
      Math.floor((Math.random()*130)+43)/10,
      Positions[Math.floor(Math.random()*Positions.length)]
    );
  },
};

/* Encapsulate everything in a Fantasty Object so that repos can be instansiated*/
export default Fantasy = {
  Positions,
  Account,
  Player,
  AccountFactory,
  AccountRepo,
  PlayerRepo,
  AddPlayerToLineup,
  Errors,
};

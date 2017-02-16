import { UserAccounts } from '/imports/infrastructure/collections';
import { Account } from './models/Account';
import { Positions } from './lib/Positions';
import { Errors } from './lib/Errors';



/* Player (Entity)
  * Unique id: String
  * Name: String
  * Price: number
  * position: Position
*/

function Player({name, price, position}) {
  this.id = uuid();
  // has name?
  this.name = name;
  // has price?
  this.price = price;
  // has position?
  this.position = position;
};


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

/* Account Repository
 * add(account)
 * remove(id)
 * findById(id)
 */
const AccountRepo = {
  count: 0,
  accounts: {},
  add(account) {
    console.log('add', {account});
    this.accounts[account.id] = account;
    this.count++;
    UserAccounts.insert(account);
    return account;
  },
  remove(accountId) {
    this.accounts[accountId] = null;
    this.count--;
  },
  findById(accountId) {
    return this.accounts[accountId];
  },
  findAll() {
    return Object.keys(this.accounts).map((key) => this.accounts[key]);
  }
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
  AccountRepo,
  PlayerRepo,
  AddPlayerToLineup,
  Errors,
};

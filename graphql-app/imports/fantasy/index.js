import { UserAccounts } from '/imports/infrastructure/collections';

const uuid = () => {
  return Math.floor(Math.random() * 1e6);
}

const defaultFormation = '4-4-2';

const Errors = {
  BUDGET: 'BUDGET'
};

const totalAmountToSpend = 100;

/* Account: Entity
 * Unique Id
 * has one Lineup
 * budgetRemaining: Number,
 */

function Account() {
  this.id = uuid();
  this.lineup = new Lineup();
  // spent should be calculated
  this.budgetRemaining = totalAmountToSpend;
}

Account.prototype = {
  addPlayerToLineup(player) {
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
};

/* Position: Value Object,
 * can be one of four values
 */

const Positions = [
  'GK',
  'DF',
  'MD',
  'FW'
];

/* Formation: Value Object
  GK: Number,
  DF: Number,
  MD: Number,
  FW: Number
  */

function Formation(formation) {
  this.GK = formation? 1 : 0;
  Positions.forEach((position, i) => {
    if (i > 0) {
      this[position] = formation? parseInt(formation.split('-')[i-1], 10) : 0;
    }
  });
};

/* Lineup: Value Object
  * has many Players
  * has a target Formation
  * has a current Formation
  */

function Lineup() {
  this.players = [];
  this.targetFormation = new Formation(defaultFormation);
  this.currentFormation = new Formation();
};

Lineup.prototype = {
  getCurrentFormation() {
    const formation = new Formation();

    this.players.forEach((player) => {
        formation[player.position]++;
    });

    return formation;
  },
  addPlayer(player) {
    let { currentFormation, targetFormation, players } = this;

    const availablePositions = {};

    Object.keys(targetFormation).forEach((position) => {
      availablePositions[position] = targetFormation[position] - currentFormation[position];
    });

    if (availablePositions[player.position] > 0) {
      players.push(player);
      currentFormation[player.position]++;
      // budget -= player.price;
      // spent += player.price;
    } else {
      // error
    }
  }
};

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

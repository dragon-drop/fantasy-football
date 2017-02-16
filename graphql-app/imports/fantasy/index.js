import { Account } from './models/Account/Account';
import { AccountFactory } from './models/Account/AccountFactory';
import { AccountRepo } from './models/Account/AccountRepo';

import { Player } from './models/Player/Player';
import { PlayerRepo } from './models/Player/PlayerRepo';

import { Positions } from './lib/Positions';

import { AddPlayerToLineup } from './services/AddPlayerToLineup';


/* Encapsulate everything in a Fantasty Object so that repos can be instansiated*/
export default Fantasy = {
  Positions,
  Account,
  Player,
  AccountFactory,
  AccountRepo,
  PlayerRepo,
  AddPlayerToLineup,
};

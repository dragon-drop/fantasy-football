import { AccountRepo } from '../models/Account/AccountRepo';
import { PlayerRepo } from '../models/Player/PlayerRepo';

export function AddPlayerToLineup(playerId, accountId) {
  const player = PlayerRepo.find(playerId);
  const account = AccountRepo.find(accountId);
  console.log({player, account});

  account.addPlayerToLineup(player);
  console.log({account});
  AccountRepo.update(account);
  return account.lineup;
}

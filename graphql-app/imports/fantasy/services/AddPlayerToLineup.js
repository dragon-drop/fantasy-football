import { AccountRepo } from '../models/Account/AccountRepo';
import { PlayerRepo } from '../models/Player/PlayerRepo';

export function AddPlayerToLineup(playerId, accountId) {
  const player = PlayerRepo.find(playerId);
  const account = AccountRepo.find(accountId);

  account.addPlayerToLineup(player);
  AccountRepo.update(account);
  return account.lineup;
}

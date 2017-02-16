import { Accounts } from '/imports/infrastructure/collections';
import { AccountFactory } from './AccountFactory';

export class AccountRepo {
  static insert(account) {
    Accounts.insert(account);
    return account;
  }

  static find(id) {
    const rawAccount = Accounts.findOne(id);

    return AccountFactory.revive(rawAccount);
  }
}

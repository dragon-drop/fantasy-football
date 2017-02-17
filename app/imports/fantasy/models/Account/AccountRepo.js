import { Accounts } from '/imports/infrastructure/collections';
import { AccountFactory } from './AccountFactory';

export class AccountRepo {

  static find(id) {
    const rawAccount = Accounts.findOne(id);

    return AccountFactory.revive(rawAccount);
  }

  static insert(account) {
    Accounts.insert(account);
    return account;
  }

  static update(account) {
    const { _id } = account;
    delete account._id;
    console.log('update', {_id, account});
    Accounts.update({ _id }, { $set: account });
  }
}

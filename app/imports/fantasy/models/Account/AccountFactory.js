import { uuid } from '/imports/fantasy/lib/mixins';
import { settings } from '/imports/fantasy/lib/settings';
import { Lineup } from '/imports/fantasy/models/Lineup';
import { Account } from './Account';

export class AccountFactory {
  static create() {
    return new Account({
      _id: uuid(),
      lineup: new Lineup(),
      budgetRemaining: settings.totalAmountToSpend,
    });
  }

  static revive(rawAccount) {
    const lineup = new Lineup(rawAccount.lineup);
    const { _id, budgetRemaining } = rawAccount;

    return new Account({ _id, lineup, budgetRemaining });
  }
}

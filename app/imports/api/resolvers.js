import GraphQLScalarTypes from 'graphql-scalar-types';
import Fantasy from '/imports/fantasy';

const PriceType = GraphQLScalarTypes.number('price').min(1.0).precision(1).create();

PriceType.description = 'A price, max 1DP';

export const resolvers = {
  price: PriceType,
  Query: {
    account(root, {_id}) {
      return Fantasy.AccountRepo.find(_id);
    },
    accounts() {
      return Fantasy.AccountRepo.findAll();
    },
    player(root, {_id}) {
      return Fantasy.PlayerRepo.find(_id);
    }
  },
  Mutation: {
    createAccount() {
      return Fantasy.AccountRepo.insert(Fantasy.AccountFactory.create());
    },
    createPlayer(root, player) {
      return Fantasy.PlayerRepo.insert(new Fantasy.Player(player));
    },
    addPlayerToLineup(root, {playerId, accountId}) {
      return Fantasy.AddPlayerToLineup(playerId, accountId);
    },
    _insertAccount(root, account) {
      const savedAccount = UserAccounts.insert(account);
      return new Fantasy.Account(savedAccount);
    }
  }
};

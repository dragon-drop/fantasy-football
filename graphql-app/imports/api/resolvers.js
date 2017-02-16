import GraphQLScalarTypes from 'graphql-scalar-types';
import Fantasy from '/imports/fantasy';

const PriceType = GraphQLScalarTypes.number('price').min(1.0).precision(1).create();

PriceType.description = 'A price, max 1DP';

export const resolvers = {
  price: PriceType,
  Query: {
    account(root, {id}) {
      return Fantasy.AccountRepo.findById(id);
    },
    accounts() {
      return Fantasy.AccountRepo.findAll();
    },
    player(root, {id}) {
      return Fantasy.PlayerRepo.findById(id);
    }
  },
  Mutation: {
    createAccount() {
      return Fantasy.AccountRepo.add(new Fantasy.Account());
    },
    createPlayer(root, player) {
      return Fantasy.PlayerRepo.add(new Fantasy.Player(player));
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

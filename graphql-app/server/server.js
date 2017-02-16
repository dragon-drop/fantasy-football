import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import { typeDefs } from '/imports/api/schema';
import { resolvers } from '/imports/api/resolvers';
import { Meteor } from 'meteor/meteor';
import Fantasy from '/imports/fantasy';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({
  schema,
});

Meteor.startup(() => {
  Fantasy.AccountRepo.add(new Fantasy.Account());
});

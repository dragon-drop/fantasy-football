import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import { typeDefs } from '/imports/api/schema';
import { resolvers } from '/imports/api/resolvers';
import { Meteor } from 'meteor/meteor';
import Fantasy from '/imports/fantasy';
import { Players } from '/imports/infrastructure/collections';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({
  schema,
});

Meteor.startup(() => {
  if (Players.find().count() === 0) {
    console.log('There are no players, seed the db');
    const { players } = JSON.parse(Assets.getText('players.json'));
    
    const positionsMap = {
      'Central Midfield': 'MD',
      'Centre Forward': 'FW',
      'Centre Back': 'DF',
      'Attacking Midfield': 'MD',
      'Keeper': 'GK',
      'Left-Back': 'DF',
      'Right-Back': 'DF',
      'Defensive Midfield': 'MD',
      'Central Midfield': 'MD',
      'Attacking Midfield': 'MD',
      'Left Wing': 'MD',
      'Secondary Striker': 'FW',
    };
    players.forEach((player) => {
      const { name, id, jerseyNumber } = player;
      const position = positionsMap[player.position]; 

      return Fantasy.PlayerRepo.insert(new Fantasy.Player({
        _id: `${id}`,
        name,
        position,
        price: jerseyNumber,
      }));

    });

  }
});

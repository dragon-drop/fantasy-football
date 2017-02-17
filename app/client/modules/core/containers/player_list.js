import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import gql from 'graphql-tag';

import PlayerList from '../components/player_list.jsx';

export const composer = ({context}, onData) => {
  const { Client } = context();
  Client.query({
    query: gql`
      query getAllPlayers {
        players {
          _id 
          name
          position
          price
        }
      }  
    `,
  }).then(({ data }) => {
    console.log({ data });
    const { players } = data;

    onData(null, { players });
  }).catch((error) => { console.error(error) });
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PlayerList);

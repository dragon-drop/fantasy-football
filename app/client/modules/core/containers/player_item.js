import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import PlayerItem from '../components/player_item.jsx';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  addToLineup: actions.accounts.addPlayerToLineup,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PlayerItem);

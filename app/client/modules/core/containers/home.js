import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Home from '../components/home.jsx';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const composer = ({context}, onData) => {
  const { LocalState } = context();
  const accountId = LocalState.get('accountId');
  onData(null, { accountId });
};
const createAccount = gql`
  mutation createAccount {
    account:createAccount {
      _id
    }
  }
`;


export const depsMapper = (context, actions) => ({
  createAccount: actions.accounts.create,
  context: () => context
});

export default 
graphql(createAccount)(
composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Home));

import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import gql from 'graphql-tag';

import Account from '../components/account.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Client, FlowRouter } = context();
  const id = FlowRouter.getParam('_id');
  console.log({id});
  Client.query({
    query: gql`
      query getAccount($id: String!) {
        account(_id: $id) {
          lineup {
            currentFormation {
              GK
              DF
              MD
              FW
            }
            targetFormation {
              GK
              DF
              MD
              FW
            }
            players {
              name
              position
              price
            }
          }
          _id
          budgetRemaining
        }  
      }
    `,
    variables: { id },
  }).then(({ data }) => {
    const { account } = data;
    console.log({ data });

    onData(null, { account });
  }).catch((error) => { console.error(error) });
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Account);

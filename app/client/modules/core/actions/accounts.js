import gql from 'graphql-tag';
export default {
  create( { Client, FlowRouter } ) {
    Client.mutate({
		  mutation: gql`
        mutation createAccount {
          account:createAccount {
            _id
          }
        }
		  `,
		}).then(({ data }) => {
      const { account } = data;
      FlowRouter.go(`/team/${account._id}`);
		}).catch((error) => {
		  console.log('there was an error sending the query', error);
		});

  },

  addPlayerToLineup( { Client, FlowRouter }, playerId) {
    const accountId =  FlowRouter.getParam('_id');
    console.log({accountId, playerId});
    Client.mutate({
		  mutation: gql`
        mutation addPlayerToLineup($playerId: String!, $accountId: String!) {
        lineup:addPlayerToLineup(playerId: $playerId, accountId: $accountId) {
              players {
                name
                position
            }
          }
        }
		  `,
      variables: {
        playerId,
        accountId,
      }
		}).then(({ data }) => {
      const { lineup } = data;
      console.log({lineup});
		}).catch((error) => {
		  console.log('there was an error sending the query', error);
		});

  }
}

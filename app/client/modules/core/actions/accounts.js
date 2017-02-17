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

  }
}

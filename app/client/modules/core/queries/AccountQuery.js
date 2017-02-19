import gql from 'graphql-tag';

export default gql`
query getAccount($id: String!) {
account: account(_id: $id) {
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
        _id
        name
        position
        price
      }
    }
    _id
    budgetRemaining
  }  
}
`;


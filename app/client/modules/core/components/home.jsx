import React from 'react';
import Account from '../containers/account';

class Home extends React.Component {
  constructor() {
    super();
    this.createAccount = this.createAccount.bind(this);
  }

  createAccount() {
    this.props.createAccount();
  }

  render() {
    return (
      <div>
        {this.props.accountId ? (
          <Account id={this.props.accountId} />
        ): (
        <button onClick={this.createAccount}>Create Account</button> 
        )}
      </div>
    )
  }
}

export default Home;

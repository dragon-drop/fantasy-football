import React from 'react';
import PlayerList from '../containers/player_list';

const Account = ({ account }) => (
  <div>
    <h1>Account ({account.id}) - £{account.budgetRemaining} to spend.</h1>
    <div style={{width: '50%'}}>
      <PlayerList />
    </div>
    <div style={{width: '50%'}}>
      Lineup
    </div>
    
  </div>
);

export default Account;

import React from 'react';
import PlayerList from '../containers/player_list';
class Account extends React.Component {
  render() {
    const { account } = this.props;
    console.log({ account });
    return (
  <div>
    <h1>Account ({account.id}) - £{account.budgetRemaining} to spend.</h1>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div>
        <PlayerList />
      </div>
      <div>
        <h2>Lineup</h2>
        <ul>
        {account.lineup.players.map((player) => (
          <li key={player._id}>{player.name}</li>
        ))}
        </ul>
      </div>
  </div>
</div>
    )
  }
}
export default Account;

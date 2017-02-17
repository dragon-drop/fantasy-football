import React from 'react';
import PlayerItem from '../containers/player_item';

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { players } = this.props;
    return (
      <div>
        {players.map((player) => (
          <PlayerItem key={player._id} player={player} />
        ))}
      </div>
    );
  }
}

export default PlayerList;

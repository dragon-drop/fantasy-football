import React from 'react';

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { players } = this.props;
    return (
      <div>
        {players.map((player) => (
          <div key={player._id}>
            {player.name} ({player.position})
          </div>
        ))}
      </div>
    );
  }
}

export default PlayerList;

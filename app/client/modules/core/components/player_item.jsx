import React from 'react';

class PlayerItem extends React.Component {
  constructor(props) {
    super(props);
    this.addToLineup = this.addToLineup.bind(this);
  }

  addToLineup() {
    this.props.addToLineup(this.props.player._id);
  }



  render() {
    const { name, position, price } = this.props.player;
    return (
      <div>
        <h2>{name} ({position}) - {price}</h2>
        <button onClick={this.addToLineup}>Add to lineup</button>
      </div>
    );
  }
}

export default PlayerItem;

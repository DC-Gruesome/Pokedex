import React, { Component } from 'react';  

class PokemonBattleInfo extends Component {

  render() {

    return (
      
      <div className="pokemonBattleInfo">

        <div className="image">
          <img src={require(`../imgs/sprites/${this.props.id}.png`)} alt={this.props.name}/>
        </div>
        <div className="name">
          {this.props.name}
        </div>
        <div className="hit-points">
          HP: {this.props.hitpoints}
        </div>

      </div>

    );

  }

}

export default PokemonBattleInfo;
import React, { Component } from 'react';  

class PokemonBattleStoryEvent extends Component {

  render() {

    return (
      
      <div className="pokemonBattleStoryEvent">

        <div className="successfulAttack">
          {this.props.attackingPokemon} attacks {this.props.defendingPokemon} doing {this.props.damageAmount} damange!
        </div>

      </div>

    );

  }

}

export default PokemonBattleStoryEvent;
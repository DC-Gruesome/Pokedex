import React, { Component } from 'react';
import PokemonCombatant from './PokemonCombatant';

class PokemonBattlePreview extends Component {

  secondPokemon() {

    return (
          <PokemonCombatant 
              handleCombatantRemove={this.props.handleCombatantRemove}
              pokemonData={this.props.pokemonToBattle[1]}/>

    );

  }

  render() {

    return (
      
      <div className="pokemonBattlePreview">

        <div>Pokemon Battle Preview</div>



        <PokemonCombatant
          handleCombatantRemove={this.props.handleCombatantRemove}
          pokemonData={this.props.pokemonToBattle[0]}/>

        <div className="versus"> VS </div>

        {this.props.pokemonToBattle[1] === undefined ? null : this.secondPokemon()}

        <div className="combatantClearFloat">
        </div>

        <button className="battle"
            onClick={() => this.props.handleBattleClick()}>
            Battle
        </button>

      </div>

    );

  }
}

export default PokemonBattlePreview;

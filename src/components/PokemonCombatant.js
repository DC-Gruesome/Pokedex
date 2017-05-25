import React, { Component } from 'react';
import PokemonDetailsInfo from './PokemonDetailsInfo';

class PokemonCombatant extends Component {

  render() {

    return (
      // <div className= "combatantContainer">
        <div className="PokemonCombatant">

          <PokemonDetailsInfo currentPokemon={this.props.pokemonData}/>

          <button 
                  className="remove" 
                  onClick={() => this.props.handleCombatantRemove(this.props.pokemonData.name)}>
                  Remove
          </button>
        </div>

      // </div>
    );

  }
}

export default PokemonCombatant;

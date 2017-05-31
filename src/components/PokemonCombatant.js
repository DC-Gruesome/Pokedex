import React, { Component } from 'react';
import PokemonDetailsInfo from './PokemonDetailsInfo';

class PokemonCombatant extends Component {

  render() {

    return (
      // <div className= "combatantContainer">
        <div className="PokemonCombatant">

          <PokemonDetailsInfo currentPokemon={this.props.pokemonData}/>

                  <i class="fa fa-trash-o" aria-hidden="true" onClick={() => this.props.handleCombatantRemove(this.props.pokemonData.name)}></i>
        </div>

      // </div>
    );

  }
}

export default PokemonCombatant;

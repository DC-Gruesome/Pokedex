import React, { Component } from 'react';
import PokemonDetailsInfo from './PokemonDetailsInfo';

class PokemonDetails extends Component {

  render() {

    return (
  
      <div className="pokemonDetails">

        <PokemonDetailsInfo 
                          currentPokemon={this.props.currentPokemon}
                          currentPokemonDesc={this.props.currentPokemonDesc}/>

        <button className="select" onClick={this.props.handleDetailsSelect}>
          select
        </button>

        <button className="cancel" onClick={this.props.handleDetailsCancel}>
          cancel
        </button>

      </div>

    );

  }
}

export default PokemonDetails;

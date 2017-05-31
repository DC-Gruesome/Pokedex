import React, { Component } from 'react';
import PokemonDetailsInfo from './PokemonDetailsInfo';

class PokemonDetails extends Component {

  render() {

    return (
  
      <div className="pokemonDetails">

        <PokemonDetailsInfo 
                          currentPokemon={this.props.currentPokemon}
                          currentPokemonDesc={this.props.currentPokemonDesc}/>

         <i className="fa fa-plus-square-o" aria-hidden="true" onClick={this.props.handleDetailsSelect}></i>
        
         <i className="fa fa-minus-square-o" aria-hidden="true" onClick={this.props.handleDetailsCancel}></i>

      </div>

    );

  }
}

export default PokemonDetails;

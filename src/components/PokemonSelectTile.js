import React, { Component } from 'react';

class PokemonSelectTile extends Component {

  render() {

    return (
      
      <div className="pokemonSelectTile" onClick={() => this.props.handlePokemonSelectTileClick(this)}>

        <div className="pokemonImage">
          <img src={require(`../imgs/sprites/${this.props.pokemonID}.png`)} alt={this.props.name}/>
        </div>

        <div className="pokemonName">
          {this.props.name}
        </div>

      </div>

    );

  }
}

export default PokemonSelectTile;

import React, { Component } from 'react';
import PokemonBattlePreview from './PokemonBattlePreview';
import PokemonSelectTile from './PokemonSelectTile';

class PokemonSelect extends Component {

  constructor() {

    super();

    this.createBattlePreview = this.createBattlePreview.bind(this);
    this.createPokemon = this.createPokemon.bind(this);

  }

  createBattlePreview() {

    return (

      <PokemonBattlePreview
                            handleBattleClick={this.props.handleBattleClick}
                            handleCombatantRemove={this.props.handleCombatantRemove}
                            pokemonToBattle={this.props.pokemonToBattle} />

    );

  }

  createPokemon(pokemon, i) {

    var pokemonID = pokemon.url;
    pokemonID =  pokemonID.slice(34, pokemonID.length - 1);

    return (

      <PokemonSelectTile
                          handlePokemonSelectTileClick={this.props.handlePokemonSelectTileClick}
                          key={"key" + i}
                          name={pokemon.name} 
                          pokemonID={pokemonID}
                          url={pokemon.url}/>
    );

  }

  render() {

    return (
      <div className="pokemonSelect">
        
        {this.props.pokemonToBattle.length === 0 ? null : this.createBattlePreview()}

        {this.props.pokemonSelectJSON.map(this.createPokemon)}

      </div>
    );

  }

}

export default PokemonSelect;

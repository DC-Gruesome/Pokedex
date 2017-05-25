import React, { Component } from 'react';  

class PokemonBasicInfo extends Component {

  getTypes() {

    var typesArray = [];

    for(var i = 0; i < this.props.currentPokemon.types.length; i++) {

      typesArray.push(<div key={"key" + i}>{this.props.currentPokemon.types[i].type.name}</div>);

    }

    return typesArray

  }

  render() {

    return (
      
      <div className="pokemonBasicInfo">

        <div className="image">
          <img src={require(`../imgs/sprites/${this.props.currentPokemon.id}.png`)} alt={this.props.name}/>
        </div>
        <div className="name">
          {this.props.currentPokemon.name}
        </div>
        <div className="height">
          Height: {this.props.currentPokemon.height}
        </div>
        <div className="weight">
          Weight: {this.props.currentPokemon.weight}
        </div>
        <div className="types">
          {this.getTypes()}
        </div>

      </div>

    );

  }

}

  export default PokemonBasicInfo;
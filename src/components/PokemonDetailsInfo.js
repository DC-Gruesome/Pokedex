import React, { Component } from 'react';  

class PokemonDetailsInfo extends Component {

  getTypes(typesData) {

    var typesArray = [];

    for(var i = 0; i < typesData.length; i++) {

      if(i !== 0)
        typesArray.push(", ");

      typesArray.push(<span key={"key" + i}>{typesData[i].type.name}</span>);

    }

    return typesArray

  }

  getStats(statsData) {

    var statsArray = [];

    for(var i = 0; i < statsData.length; i++) {

      statsArray.push(
        <div key={"key" + i} className={statsData[i].stat.name}>
          {statsData[i].stat.name} : {statsData[i].base_stat}
        </div>);

    }

    return statsArray

  }

  render() {

    return (
      
      <div className="pokemonDetailsInfo">

        <div className="name">
            {this.props.currentPokemon.name}
        </div>
        <div className="image">
          <img src={require(`../imgs/sprites/${this.props.currentPokemon.id}.png`)} alt={this.props.name}/>
        </div>
        <div className="statsContainer">
          <div className="number">
            Pokedex ID: {this.props.currentPokemon.id}
          </div>
          <div className="height">
            Height: {this.props.currentPokemon.height}
          </div>
          <div className="weight">
            Weight: {this.props.currentPokemon.weight}
          </div>
          <div className="types">
            Types: {this.getTypes(this.props.currentPokemon.types)}
          </div>
          <div className="stats">
            {this.getStats(this.props.currentPokemon.stats)}
          </div> 
          <div className="clearFloat">
          </div> 
        </div>
     
      </div>

    );

  }

}

  export default PokemonDetailsInfo;
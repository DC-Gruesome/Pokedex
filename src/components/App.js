import React, { Component } from 'react';
import pokemonSelectJSON from '../json/pokemon.json';
//import pokemonDetailsJSON from '../json/pokemonDetails.json';
import PokemonSelect from './PokemonSelect';
import PokemonDetails from './PokemonDetails';
import PokemonBattle from './PokemonBattle';
import '../font-awesome/css/font-awesome.css'
import '../css/App.css';

class App extends Component {

  constructor() {

    super();

    this.createBattleAndSelectionScreen = this.createBattleAndSelectionScreen.bind(this);

    this.createSelect = this.createSelect.bind(this);

    this.createSelectionScreen = this.createSelectionScreen.bind(this);

    this.handleBattleClick = this.handleBattleClick.bind(this);

    this.handPlayAgain = this.handPlayAgain.bind(this);

    this.handleCombatantRemove = this.handleCombatantRemove.bind(this);

    this.handleDetailsCancel = this.handleDetailsCancel.bind(this);

    this.handleDetailsSelect = this.handleDetailsSelect.bind(this);

    this.handlePokemonSelectTileClick = this.handlePokemonSelectTileClick.bind(this);

    this.state = {

      //currentPokemon : pokemonDetailsJSON.results[0],

      currentPokemon : undefined,

      inBattleMode: false,

      isLoading: false,

      pokemonToBattle : []

    }

  }

  handleBattleClick() {

    this.setState({inBattleMode : true});

  }

  handPlayAgain() {

    console.log("Handle Play Again!");

    this.setState({

      currentPokemon : undefined,

      inBattleMode: false,

      isLoading: false,

      pokemonToBattle : []

    });

  }

  handleCombatantRemove(combatantToRemove) {

    let pokemonToBattleArray = this.state.pokemonToBattle;

    for(var i = 0; i < pokemonToBattleArray.length; i++) {

      if(combatantToRemove === pokemonToBattleArray[i].name)
        pokemonToBattleArray.splice(i,1);
    
    }

    this.setState({pokemonToBattle : pokemonToBattleArray})

  }

  handleDetailsCancel(e) {


    this.setState({currentPokemon : undefined});

  }

  handleDetailsSelect(e) {

    let pokemonToBattleArray = this.state.pokemonToBattle;

    pokemonToBattleArray.push(this.state.currentPokemon);

    this.setState({

      currentPokemon : undefined,
      pokemonToBattle : pokemonToBattleArray

    });

  }

  handlePokemonSelectTileClick(pokemon) {

    // if(this.state.pokemonToBattle.length !== 2)
    //   this.setState({currentPokemon : pokemonDetailsJSON.results[pokemon.props.pokemonID - 1]});

    console.log(pokemon.props.pokemonID);

    this.setState({isLoading : true});    

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.props.pokemonID}`)
      .then(res=>res.json())
      .then(response => {
        console.log(response);

        this.setState({
          currentPokemon : response,
          isLoading : false
        });

      });

  }

  createBattle() {


    return (

/*
      <PokemonBattle  handPlayAgain={this.handPlayAgain}
                      pokemonToBattle={[pokemonDetailsJSON.results[0], pokemonDetailsJSON.results[1]]}/>
*/
      <PokemonBattle  
                      handPlayAgain={this.handPlayAgain}
                      pokemonToBattle={this.state.pokemonToBattle}/>

    );


  }

  createSelectionScreen() {

    return (

      <div className="selectionScreen">
        {this.state.currentPokemon === undefined ? this.createSelect() : this.createDetails()}
      </div>

    );

  }

  createSelect() {

    return (

      <PokemonSelect
                      handleBattleClick={this.handleBattleClick}
                      handleCombatantRemove={this.handleCombatantRemove}
                      handlePokemonSelectTileClick={this.handlePokemonSelectTileClick}
                      pokemonSelectJSON={pokemonSelectJSON.results}
                      pokemonToBattle={this.state.pokemonToBattle}/>
    );

  }

  createDetails() {

    return (
      <PokemonDetails 
                      currentPokemon={this.state.currentPokemon} 
                      handleDetailsCancel={this.handleDetailsCancel}
                      handleDetailsSelect={this.handleDetailsSelect}/>
                    
    );

  }

  createLoadingScreen() {

    return (

      <div className="loadingScreen">
        <i className="fa fa-superpowers fa-spin fa-3x fa-fw" aria-hidden="true"></i>
        <div className="loadingText">
          Loading...
        </div>  
      </div>
    );

  }

  createBattleAndSelectionScreen() {

    return (

      <div className="inBattleMode">
        {this.state.inBattleMode ? this.createBattle() : this.createSelectionScreen()}
      </div>

    );

  }

  render() {

    return (
      <div className="App">

        {this.state.isLoading ? this.createLoadingScreen() : this.createBattleAndSelectionScreen()}

      </div>
    );

  }
}

export default App;

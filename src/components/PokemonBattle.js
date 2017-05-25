import React, { Component } from 'react';
import Sound from 'react-sound';
import PokemonBattleInfo from './PokemonBattleInfo';
import PokemonBattleStory from './PokemonBattleStory';

class PokemonBattle extends Component {

  constructor() {

    super();

    this.createWinnerScreen = this.createWinnerScreen.bind(this);
    this.handleDamage = this.handleDamage.bind(this);
    this.playSoundFinish = this.playSoundFinish.bind(this);

    this.state = {

      attackingPokemon: undefined,
      defendingPokemon: undefined,
      pokemon0HP: undefined,
      pokemon1HP: undefined,
      soundToPlay: undefined,
      winnerDetermined : false

    }

  }

random(num) {

    return Math.floor(Math.random() * num);

  } 

  determineInitiative() {

    let attacking = 0;
    let defending = 1;

    if(this.props.pokemonToBattle[0].stats[0].base_stat < this.props.pokemonToBattle[1].stats[0].base_stat) {
      attacking = 1;
      defending = 0;
    }

    this.setState({

      attackingPokemon: attacking,
      defendingPokemon: defending

    });


  }

  createBattleInfo() {

    let battleInfos = [];

    for(let i = 0; i < this.props.pokemonToBattle.length; i++) {

      battleInfos.push(

        <PokemonBattleInfo
                            hitpoints={this.state["pokemon" + i + "HP"]}
                            id={this.props.pokemonToBattle[i].id}
                            key={"key" + i}
                            name={this.props.pokemonToBattle[i].name}/>

      );

    }

    return battleInfos

  }

  createWinnerScreen() {

    return(

      <div className="winnerScreen">

        <div className="image">
          <img src={require(`../imgs/sprites/${this.props.pokemonToBattle[this.state.attackingPokemon].id}.png`)} alt={this.props.name}/>
        </div>
        <div className="name">
          {this.props.pokemonToBattle[this.state.attackingPokemon].name} wins!!!
        </div>

        <button onClick={this.props.handPlayAgain}>
          Play again
        </button>

      </div>

    );

  }

  createBattleStory() {

    return(

      <PokemonBattleStory
                          attackingPokemon={this.state.attackingPokemon}
                          defendingPokemon={this.state.defendingPokemon}
                          handleDamage={this.handleDamage}
                          pokemon={[this.props.pokemonToBattle[0].name, this.props.pokemonToBattle[1].name]}
                          random={this.random}/>
    );

  }

  pokemon0Damaged(state) {

    state["attackingPokemon"] = 0;
    state["defendingPokemon"] = 1;

    return state

  }

  pokemon1Damaged(state) {

    state["attackingPokemon"] = 1;
    state["defendingPokemon"] = 0;

    return state

  }

  removeDamageEffect(e) {

    if (e.propertyName !== 'transform') 
      return;
    e.target.classList.remove('damaged');

  }

  handleDamage(damageAmount) {

    let defendingPokemonHP = "pokemon" + this.state.defendingPokemon + "HP";

    let defendingPokemonHPValue = this.state[defendingPokemonHP];

    defendingPokemonHPValue -= damageAmount;

    let newState = {};

    if(damageAmount > 0) {

        let pokemon = document.getElementsByClassName("pokemonBattleInfo");
        let pokemonImage = pokemon[this.state.defendingPokemon].getElementsByTagName("img")[0];

        pokemonImage.classList.add('damaged');
        pokemonImage.addEventListener('transitionend', this.removeDamageEffect);
    }

    if(defendingPokemonHPValue < 0) {

      defendingPokemonHPValue = 0;
      
      newState["winnerDetermined"] = true;

    }
    else {

      newState[defendingPokemonHP] = defendingPokemonHPValue;

      this.state.defendingPokemon === 0 ? this.pokemon0Damaged(newState) : this.pokemon1Damaged(newState);

      newState["soundToPlay"] = this.random(150) + 1;

    }

    this.setState(newState);

  }

  soundFile() {

    return (

      <Sound 
            url={require(`../audio/${this.state.soundToPlay}.mp3`)}
            playStatus="PLAYING" 
            onFinishedPlaying={this.playSoundFinish}/>

    )

  }

  playSoundFinish() {

    this.setState({soundToPlay : undefined});

  }

  render() {

    return (
      
      <div className="pokemonBattle">

        {this.state.soundToPlay ? this.soundFile() : null}

        {this.state.pokemon0HP !== undefined && !this.state.winnerDetermined ? this.createBattleInfo() : null}

        {this.state.winnerDetermined ? this.createWinnerScreen() : this.createBattleStory()}

      </div>

    );

  }

  componentDidMount() {
    
      this.setState({
        pokemon0HP : this.props.pokemonToBattle[0].stats[5].base_stat,
        pokemon1HP : this.props.pokemonToBattle[1].stats[5].base_stat,        
      });

      this.determineInitiative();

  }

}

export default PokemonBattle;

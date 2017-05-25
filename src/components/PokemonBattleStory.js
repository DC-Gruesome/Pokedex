import React, { Component } from 'react';  
import TimerMixin from 'react-timer-mixin';
import PokemonBattleStoryEvent from './PokemonBattleStoryEvent';

class PokemonBattleStory extends Component {

  constructor() {

    super();

    this.generateDamage = this.generateDamage.bind(this);
    this.generateInitiative = this.generateInitiative.bind(this);

    this.state = {

      battleStory : [],
      delay: 1500,
      initiativeDeclared: false,
      maxDamage: 20,
      numTurns: 0

    }

  }

  random(num) {

    return Math.floor(Math.random() * num);

  } 

  generateInitiative() {



    let tempBattleStoryArray = this.state.battleStory;

    tempBattleStoryArray.push(
      <div key={"key" + this.random(1000)} className="initiative">
        {this.props.pokemon[this.props.attackingPokemon]} wins the initiative!
      </div>
    );

    this.setState({
      battleStory : tempBattleStoryArray,
      initiativeDeclared: true
    });

    TimerMixin.setTimeout(this.generateDamage, this.state.delay);

  }

  generateDamage() {

    let tempBattleStoryArray = this.state.battleStory;

    let damageAmount = this.random(this.state.maxDamage);

    let currentTurns = this.state.numTurns;

    tempBattleStoryArray.push(

      <PokemonBattleStoryEvent
                                attackingPokemon={this.props.pokemon[this.props.attackingPokemon]}
                                defendingPokemon={this.props.pokemon[this.props.defendingPokemon]}
                                damageAmount={damageAmount}
                                key={"key" + currentTurns}
                                random={this.random}/>

    ); 

    currentTurns++;

    this.setState({
      battleStory : tempBattleStoryArray,
      numTurns : currentTurns
    });

    this.props.handleDamage(damageAmount);

  }

  render() {

    return (
      
      <div className="pokemonBattleStory">

        {this.state.battleStory}

      </div>

    );

  }

  componentDidMount() {

    TimerMixin.setTimeout(this.generateInitiative, this.state.delay);

  }

  componentDidUpdate(prevprops) {

    if(this.state.initiativeDeclared && (prevprops.attackingPokemon !== this.props.attackingPokemon))
      TimerMixin.setTimeout(this.generateDamage, this.state.delay);

  }

}

export default PokemonBattleStory;
import Phaser from 'phaser'
import * as Cards from '../gameClasses/CardLibrary';


export default class Deck{
  constructor(gameState, player) {
    this.deck = [];
    for (var i = 0; i < 10; i++){
      this.deck.push(new Cards.Basic_Fire_Tower(gameState.game, 0, 0, player));
      this.deck.push(new Cards.Mountain(gameState.game, 0, 0, player));
    }
    this.name = "";
    this.gameState = gameState;
  }

  shuffle(){
    var deck = this.deck;
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }

  getTopCard(){
    return this.deck.pop();
  }

  addCard(){

  }

  removeCard(){
  	
  }

  update () {
  }
}

import Phaser from 'phaser'
import Hand from '../gameClasses/Hand';
import Deck from '../gameClasses/Deck';
import ManaBars from '../gameClasses/ManaBars';

export default class Player{
  constructor(username, gameState) {
    this.username = username;
    this.red = {rate: 1, max: 1};
    this.blue = {rate: 0, max: 0};
    this.black = {rate: 0, max: 0};
    this.green = {rate: 0, max: 0};
    this.towers = [];
    this.gameState = gameState;
    this.hand = new Hand(gameState);
    this.deck = new Deck(gameState, this);
    this.manaBar = new ManaBars(gameState.game, this);
  }

  startGame(){
    this.deck.shuffle();
    // draw 7 
    for (var i = 0; i < 2; i++){
        this.hand.addCard(this.deck.getTopCard());
    }
    this.hand.displayHand();
  }

  tickUpdate(){
    console.log('tick');
  }




}


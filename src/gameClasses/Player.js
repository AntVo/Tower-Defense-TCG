import Phaser from 'phaser'
import Hand from '../gameClasses/Hand';
import Deck from '../gameClasses/Deck';
import ManaBar from '../gameClasses/ManaBar';

export default class Player{
  constructor(username, gameState) {
    this.username = username;
    this.red = {rate: 2, max: 1, available: 0};
    this.blue = {rate: 0, max: 0, available: 0};
    this.black = {rate: 0, max: 0, available: 0};
    this.green = {rate: 0, max: 0, available: 0};
    this.towers = [];
    this.gameState = gameState;
    this.hand = new Hand(gameState);
    this.deck = new Deck(gameState, this);

    // Red
    this.redManabar = new ManaBar({
          game: gameState,
          x: 800,
          y: 560,
          seconds: this.red.rate,
          type: 'up',
          color: '0xff0000', //red
          onComplete: () => {this.redManabar.start(); manabarCompletion(this.red)}
        });
    this.redManabar.start();

    var that = this;
    function manabarCompletion(manaColor){
      if (manaColor.available + 1 > manaColor.max ){
        manaColor.available = manaColor.max;
      } else {
        manaColor.available += 1;
      }
      that.redManabar.manaCounter.text = manaColor.available;
    }

  }

  startGame(){
    this.deck.shuffle();
    // draw 7 
    for (var i = 0; i < 4; i++){
       this.hand.addCard(this.deck.getTopCard());
    }
    this.hand.displayHand();
  }



  tickUpdate(){
    console.log('hey;');
  }




}


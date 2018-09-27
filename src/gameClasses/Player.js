import Phaser from 'phaser'
import Hand from '../gameClasses/Hand';
import Deck from '../gameClasses/Deck';
import ManaBar from '../gameClasses/ManaBar';
import Summon from '../gameClasses/Summon';

export default class Player{
  constructor(username, gameState) {

    // MetaData
    this.username = username;
    this.gameState = gameState;

    // Mana
    this.red = {rate: 2, max: 0, available: 0};
    this.blue = {rate: 0, max: 0, available: 0};
    this.black = {rate: 0, max: 0, available: 0};
    this.green = {rate: 0, max: 0, available: 0};

    // Player's stuff
    this.towers = [];
    this.hand = new Hand(gameState);
    this.deck = new Deck(gameState, this);

    // Timer
    this.drawTimer = gameState.time.create(false);
    this.drawTimer.loop(3200, drawCard, this);
    this.drawTimer.start();
    function drawCard(){
      this.hand.addCard(this.deck.getTopCard());
      this.hand.displayHand();
    }

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

    // Summons
    this.orc = new Summon(this.gameState.game, 300, 300, 'orc_grunt', 3, 3, 3);
    this.gameState.game.add.existing(this.orc);






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


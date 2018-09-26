import Phaser from 'phaser'

export default class Hand{
  constructor(gameState) {
    this.hand = [];
    this.gameState = gameState;
  }

  removeCard(card){
    var index = this.hand.indexOf(card);
    if (index > -1){
      this.hand.splice(index, 1);
    }
  }

  //addCard also adds onDrag eventlisteners
  addCard(card){
    card.events.onDragStart.add(onDragStart, this.gameState);
    card.events.onDragStop.add(onDragStop, this.gameState);
    card.events.onInputDown.add(onDown, this.gameState);
    this.hand.push(card);
    this.gameState.game.add.existing(card);

    function onDragStart(card, pointer){
    }

    function onDragStop(card, pointer){
      card.play(pointer);
    }

    function onDown(card, pointer){
      if (card.nonPlaceable){
        return;
      }
      card.loadTexture(card.gameImage);
      card.scale.setTo(1.1, 1.1);
      card.x = pointer.x;
      card.y = pointer.y;
    }
  }

  displayHand(){
    var x = 70;
    var y = 600;
    this.hand.forEach((card) => {
      card.x = x;
      card.y = y;
      x += 105;
    })
  }

}



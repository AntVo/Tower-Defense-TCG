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
    var that = this;
    card.events.onDragStart.add(onDragStart, this.gameState);
    card.events.onDragStop.add(onDragStop, this.gameState);
    card.events.onInputDown.add(onDown, this.gameState);
    this.hand.push(card);
    this.gameState.game.add.existing(card);

    function onDragStart(card, pointer){
    }

    function onDragStop(card, pointer){
      card.play();
      const xTile = that.gameState.layer.getTileX(pointer.x);
      const yTile = that.gameState.layer.getTileY(pointer.y);
      var tile = that.gameState.map.getTile(xTile, yTile);
      if (tile.properties.buildable /* || AND HAS MANA*/){
        card.x = tile.worldX+16;
        card.y =tile.worldY+10;
        card.placed = true;
        that.removeCard(card);
        that.displayHand();
      } else {
        card.loadTexture(card.cardImage);
        card.scale.setTo(.45,.45);
        that.displayHand();
      }
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



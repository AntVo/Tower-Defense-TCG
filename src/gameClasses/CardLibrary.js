import Card from '../gameClasses/Card';

export class Basic_Fire_Tower extends Card{
  // TODO: INSTEAD OF CHANGING THE SPRITE OF THE CARD TO A TOWER. INSTEAD ACTUALLY CREATE A TOWER OBJECT
  // AND POPULATE PLAYER TOWER ARRAY.

  constructor (game, x, y, player){
    super(game, x, y, 'basic_fire_tower_card', 'basic_fire_tower');
    this.nonPlaceable = false;

    this.play = function(pointer){
      // Snap to Grid if playable, etc
      var game = player.hand.gameState;
      const xTile = game.layer.getTileX(pointer.x);
      const yTile = game.layer.getTileY(pointer.y);
      var tile = game.map.getTile(xTile, yTile);

      /* Buildable tile && AND HAS  2 MANA*/
      if (tile.properties.buildable && player.red.available >= 2 && this.placed == false){
        this.x = tile.worldX+16;
        this.y =tile.worldY+10;
        this.placed = true;
        this.inputEnabled = false;
        player.red.available -= 2;
        player.redManabar.manaCounter.text = player.red.available;
        player.hand.removeCard(this);
        player.hand.displayHand();
      } else {
        this.loadTexture(this.cardImage);
        this.scale.setTo(.45,.45);
        player.hand.displayHand();
      }
    }
  } 

}

export class Mountain extends Card{
  constructor (game, x, y, player){
    super(game, x, y, 'mountain', null);
    this.nonPlaceable = true;
    
    // Play function
    this.play = function(){
      player.red.max++;
      player.red.rate-= .25;
      player.redManabar.setTime(player.red.rate);
      this.kill();
      player.hand.removeCard(this);
      player.hand.displayHand();
    }
  }

}


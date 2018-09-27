/* globals __DEV__ */
import Phaser from 'phaser';
import Card from '../gameClasses/Card';
import Hand from '../gameClasses/Hand';
import Deck from '../gameClasses/Deck';
import Player from '../gameClasses/Player';
import lang from '../lang';

export default class extends Phaser.State {
  init() {
  }
  preload() { 
     this.load.image('basic_fire_tower_card', 'assets/cards/tower.png');
     this.load.image('basic_fire_tower', 'assets/cards/tower_tower.png');
     this.load.image('mountain', 'assets/cards/mountain.png');
     this.load.spritesheet('timer', 'assets/images/timer.png', 150, 20);
     this.load.spritesheet('orc_grunt', 'assets/summons/orc_grunt.png', 77, 64, 7);
  }

  create() {
    var that = this;
    // Create Map. (Assets were loaded in Splash);
    this.map = game.add.tilemap('endlessMap');
    this.map.addTilesetImage('tiles', 'tiles');
    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    // Cards, Hands, and Deck, and Player
    this.player1 = new Player("player1", this);
    this.player1.startGame();

    // Input listeners (mouse)
    this.input.onDown.add((pointer, event) => {
      const xTile = this.layer.getTileX(pointer.x);
      const yTile = this.layer.getTileY(pointer.y);
      var tile = this.map.getTile(xTile, yTile);
      if (tile.properties.buildable){
        console.log(tile);
      }
    });


  }

  update(){
    
  }
  
  render() {
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(card1, 32, 32)
    // }
  }


}



import Phaser from 'phaser'

// 'red_manabar'
// 'red_manabar_fill'

export default class ManaBars{
  constructor (game, player) {
    this.player = player;

    this.redBar =  new Phaser.Sprite(game, 500, 500, 'red_manabar');
    this.redBarFill = new Phaser.Sprite(game, 500, 500, 'red_manabar_fill'); 
    game.add.existing(this.redBar);
    game.add.existing(this.redBarFill);
    
    
  }
}

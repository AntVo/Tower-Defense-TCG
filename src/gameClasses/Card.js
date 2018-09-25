import Phaser from 'phaser'

export default class Card extends Phaser.Sprite {
  constructor (game, x, y, asset, gameImage) {
    super(game, x, y, asset);
    this.cardImage = asset;
    this.cardType =  null; // Tower, Minion, Spell
    this.gameImage = gameImage; // What the card looks like when played
    this.nonPlaceable = true;
    this.rarity = "common";
    this.scale.setTo(.45,.45);
    this.anchor.setTo(.5, .65);
    this.placed = false;
    this.inputEnabled = true;
    this.input.enableDrag();
  }
}
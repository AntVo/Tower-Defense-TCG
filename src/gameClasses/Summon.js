import Phaser from 'phaser'

export default class Summon extends Phaser.Sprite {
  constructor (game, x, y, asset, health, attack, speed) {
    super(game, x, y, asset);
    this.health = health;
    this.attack = attack;
    this.speed = speed;
    this.animations.add('walk');
    this.animations.play('walk', 30, true);
  }
}
import Card from '../gameClasses/Card';

export class Basic_Fire_Tower extends Card{
  constructor (game, x, y, player){
    super(game, x, y, 'basic_fire_tower_card', 'basic_fire_tower');
    this.nonPlaceable = false;
    this.cost = { red: 2 };
  } 
  play(){
    console.log('played tower');
  }
}

export class Mountain extends Card{
  constructor (game, x, y, player){
    super(game, x, y, 'mountain', null);
    this.nonPlaceable = true;
    
    // Play function
    this.play = function(){
      player.red.max++;
      player.red.rate++;
      console.log(player.red);
    }
  }

}


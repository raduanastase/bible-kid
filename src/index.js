import * as Phaser from 'phaser';
import BootScene from './BootScene';
import TitleScene from './TitleScene';
import Game from './Game';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 500},
      debug: true
    }
  },
  scene: [
    BootScene,
    TitleScene,
    Game,
  ]
};

//const game = new Phaser.Game(createLevel({width: 800, height: 600, levelNumber: 1, character: 'player'}));
const game = new Phaser.Game(config);
import {Scene} from 'phaser';

export default class BootScene extends Scene {
  constructor() {
    super({key: 'BootScene'});
  }

  preload() {
    // map made with Tiled in JSON format
    this.load.tilemapTiledJSON('map', `assets/map1.json`);
    // tiles in spritesheet
    this.load.spritesheet('tiles', 'assets/tiles.png', {frameWidth: 70, frameHeight: 70});
    // simple coin image
    this.load.image('coin', 'assets/coinGold.png');
    // player animations
    this.load.atlas('player', `assets/player1.png`, `assets/player.json`);

    this.load.bitmapFont('font', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
  }

  create() {
    this.scene.start('TitleScene');
  }
}

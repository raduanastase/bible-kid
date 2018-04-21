import 'phaser';
import BaseLevel from './BaseLevel';

var game = new Phaser.Game(BaseLevel({width: 800, height: 600, levelNumber: 1, character: 'player'}));
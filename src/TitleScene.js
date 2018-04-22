import {Scene, Input} from 'phaser';

export default class TitleScene extends Scene {
  constructor() {
    super({key: 'TitleScene'});
  }

  preload() {
  }

  create() {
    this.scene.bringToTop();
    // set background color, so the sky is not black
    this.cameras.main.setBackgroundColor('#ccccff');

    this.registry.set('restartScene', false);

    this.pressSpace = this.add.bitmapText(16 * 8 + 4, 8 * 16, 'font', 'PRESS SPACE TO START', 8);
    this.blink = 1000;

    this.startKey = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.SPACE);
  }

  update(time, delta) {
    if (this.registry.get('restartScene')) {
      this.restartScene();
    }
    this.blink -= delta;
    if (this.blink < 0) {
      this.pressSpace.alpha = this.pressSpace.alpha === 1 ? 0 : 1;
      this.blink = 500;
    }

    if (this.startKey.isDown) {
      this.scene.stop('Game');
      this.scene.start('Game');
    }
  }

  restartScene() {
    this.scene.stop('Game');
    this.scene.launch('Game');
    this.scene.bringToTop();

    this.registry.set('restartScene', false);
  }
}

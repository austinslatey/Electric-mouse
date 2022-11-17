class StartScene extends Phaser.Scene {
    constructor() {
      super({
        key: 'StartScene'
      });
    }
  
    preload() {
      this.load.spritesheet('background', 'https://content.codecademy.com/courses/learn-phaser/electric-mouse/start.png', {
        frameWidth: 480,
        frameHeight: 640
      });
    }
  
    create() {
      // Creates the text on the start screen:
      this.add.text(10, 50, 'Lightning Rat', {
        fill: '#4D39E0',
        fontSize: '45px'
      });
      this.add.text(130, 520, ' Start Screen\nClick to start!', {
        fill: '#4D39E0',
        fontSize: '20px'
      });
  
      // Create the sprite object, animation, and play the animation: 
      this.add.sprite(240, 320, 'background');
  
  
      this.input.on('pointerup', () => {
        // Add logic to transition from StartScene to GameScene:
        this.scene.stop('StartScene');
        this.scene.start('GameScene');
      });
  
    }
  }
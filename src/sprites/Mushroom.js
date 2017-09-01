import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.game.physics.arcade.enableBody(this)
    this.checkWorldBounds = true
    this.events.onOutOfBounds.add(() => this.kill(), this)
    this.body.gravity.y = -1000
    this.game.add.existing(this)
  }

  update () {
    this.body.velocity.x += (() => Math.random() * 100)()
    this.body.velocity.y += (() => Math.random() * 100)()
    this.angle += 10
  }
}

import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, noVelocity }) {
    super(game, x, y, asset)
    this.noVelocity = noVelocity
    this.anchor.setTo(0.5)
    this.game.physics.arcade.enableBody(this)
    this.body.collideWorldBounds = true
    this.body.bounce.setTo(0.9, 0.9)
    this.checkWorldBounds = true
    this.body.gravity.y = !noVelocity && -1000
    this.game.add.existing(this)
    const go = this.game.add.tween(this)

    go.to({ x: (() => Math.random() * 400)(), y: (() => Math.random() * 400)() })
    go.onComplete.add(this.go, this)
    go.start()
  }

  go () {
    const s = this.game.add.tween(this)
    s.to({ x: (() => Math.random() * 700)(), y: (() => Math.random() * 700)() })
    s.onComplete.add(this.go, this)
    s.start()
  }

  update () {
    if (!this.noVelocity) {
      this.body.velocity.x += (() => Math.random() * 10)()
      this.body.velocity.y += (() => Math.random() * 10)()
      this.angle += 10
    }
  }
}

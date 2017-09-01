import RootSprite from './RootSprite'

export default class extends RootSprite {
  constructor ({ game, x, y, asset, noVelocity }) {
    super({ game, x, y, asset, noVelocity })
    this.animations.add('goReid', [0, 1, 2, 3, 4, 5])
    this.animations.play('goReid', 20, true)
  }
}

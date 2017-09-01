import RootSprite from './RootSprite'

export default class extends RootSprite {
  constructor ({ game, x, y, asset, noVelocity }) {
    super({ game, x, y, asset, noVelocity })
    this.animations.add('goCompy', [6, 7, 8, 9, 10])
    this.animations.play('goCompy', 20, true)
  }
}

import Phaser from 'phaser'
import Reid from '../sprites/Reid'
import Compy from '../sprites/Compy'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Adventure'
    this.cursors = this.game.input.keyboard.createCursorKeys()
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)
    new Reid({ // eslint-disable-line
      game: this.game,
      x: 100,
      y: 100,
      noVelocity: true,
      asset: 'reid'
    })
    new Compy({ // eslint-disable-line
      game: this.game,
      x: 200,
      y: 200,
      noVelocity: true,
      asset: 'reid'
    })
  }

  render () {

  }

  update () {
    if (this.cursors.down.isDown) {
      new Reid({ // eslint-disable-line
        game: this.game,
        x: 0,
        y: 0,
        asset: 'reid'
      })
      new Compy({ // eslint-disable-line
        game: this.game,
        x: 0,
        y: 0,
        asset: 'reid'
      })
    }
  }
}

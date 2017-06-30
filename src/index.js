import {HTML5Video} from 'clappr'

// Note: HTML5Video playback class extends Playback class
export default class MyPlayback extends HTML5Video {
  get name() { return 'my_playback' }

  static canPlay (resource, mimeType) {
    console.log('MyPlayback.canPlay')
    return true
  }

  constructor(...args) {
    super(...args)
    console.log('MyPlayback.constructor')
  }

  play() {
    console.log('MyPlayback.play')
    super.play()
  }

  pause() {
    console.log('MyPlayback.pause')
    super.pause()
  }

  // For more details on properties and methods to implements,
  // see Clappr Container and Playback classes.
}

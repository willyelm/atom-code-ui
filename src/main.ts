// Xatom
import { install } from 'atom-package-deps'
var root: HTMLElement = document.documentElement

export class Xatom {
  private _fontSize: number | string;
  constructor () {
    console.log('Xatom...')
    // observe
    atom.config['observe']('xatom.fontSize', (value) => {
      this.fontSize = value
    })
  }
  set fontSize (value: any) {
    console.log('set font', value)
    if (Number.isInteger(value)) {
      root.style.fontSize = `${value}px`
    } else if (value === 'Auto') {
      this.fontSize = null
    } else {
      root.style.fontSize = ''
    }
  }
  get fontSize () {
    return this._fontSize
  }
  destroy () {
    this.fontSize = null
  }
}


module.exports = {
  view: null,
  activate () {
    // install('xatom', true)
    this.view = new Xatom()
  },
  deactivate () {
    if (this.view) {
      this.view.destroy()
    }
  }
}

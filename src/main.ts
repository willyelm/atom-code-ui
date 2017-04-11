// Xatom
import { install } from 'atom-package-deps'
var root: HTMLElement = document.documentElement

export class Xatom {
  private _fontSize: number | string;
  constructor () {
    atom.config['observe']('xatom.fontSize', (value) => {
      this.fontSize = value
    })
    // this.detectPixelRatio()
  }
  // detectPixelRatio () {
  //   if (window.devicePixelRatio && devicePixelRatio >= 2) {
  //     var testElem = document.createElement('div')
  //     testElem.style.border = '.5px solid transparent'
  //     document.body.appendChild(testElem)
  //     if (testElem.offsetHeight >= 1) {
  //       root.classList.add('hairlines')
  //     }
  //     document.body.removeChild(testElem)
  //   }
  // }
  set fontSize (value: any) {
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

// Atom Code
var root: HTMLElement = document.documentElement

export class AtomCodeUI {
  private _fontSize: number | string;
  private _showDockButtons: string;
  constructor () {
    atom.config['observe']('atom-code-ui.fontSize', (value) => {
      this.fontSize = value
    })
    atom.config['observe']('atom-code-ui.fontSize', (value) => {
      this.showDockButtons = value
    })
  }
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
  set showDockButtons (value) {
    if (value) {
      root.setAttribute('theme-atom-code-ui-dock-buttons', 'hidden')
    } else {
      root.removeAttribute('theme-atom-code-ui-dock-buttons')
    }
  }
  get showDockButtons () {
    return this._showDockButtons
  }
  destroy () {
    this.fontSize = null
    this.showDockButtons = null
  }
}

module.exports = {
  view: null,
  activate () {
    require('atom-package-deps').install('atom-code-ui', true)
    this.view = new AtomCodeUI()
  },
  deactivate () {
    if (this.view) {
      this.view.destroy()
    }
  }
}

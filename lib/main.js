"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var root = document.documentElement;
var AtomCodeUI = (function () {
    function AtomCodeUI() {
        var _this = this;
        atom.config['observe']('atom-code-ui.fontSize', function (value) {
            _this.fontSize = value;
        });
        atom.config['observe']('atom-code-ui.fontSize', function (value) {
            _this.showDockButtons = value;
        });
    }
    Object.defineProperty(AtomCodeUI.prototype, "fontSize", {
        get: function () {
            return this._fontSize;
        },
        set: function (value) {
            if (Number.isInteger(value)) {
                root.style.fontSize = value + "px";
            }
            else if (value === 'Auto') {
                this.fontSize = null;
            }
            else {
                root.style.fontSize = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtomCodeUI.prototype, "showDockButtons", {
        get: function () {
            return this._showDockButtons;
        },
        set: function (value) {
            if (value) {
                root.setAttribute('theme-atom-code-ui-dock-buttons', 'hidden');
            }
            else {
                root.removeAttribute('theme-atom-code-ui-dock-buttons');
            }
        },
        enumerable: true,
        configurable: true
    });
    AtomCodeUI.prototype.destroy = function () {
        this.fontSize = null;
        this.showDockButtons = null;
    };
    return AtomCodeUI;
}());
exports.AtomCodeUI = AtomCodeUI;
module.exports = {
    view: null,
    activate: function () {
        require('atom-package-deps').install('atom-code-ui', true);
        this.view = new AtomCodeUI();
    },
    deactivate: function () {
        if (this.view) {
            this.view.destroy();
        }
    }
};
//# sourceMappingURL=main.js.map
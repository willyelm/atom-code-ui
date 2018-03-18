"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var root = document.documentElement;
var AtomCode = (function () {
    function Xatom() {
        var _this = this;
        atom.config['observe']('xatom-ui.fontSize', function (value) {
            _this.fontSize = value;
        });
    }
    Object.defineProperty(Xatom.prototype, "fontSize", {
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
    Xatom.prototype.destroy = function () {
        this.fontSize = null;
    };
    return Xatom;
}());
exports.Xatom = Xatom;
module.exports = {
    view: null,
    activate: function () {
        this.view = new Xatom();
    },
    deactivate: function () {
        if (this.view) {
            this.view.destroy();
        }
    }
};
//# sourceMappingURL=main.js.map

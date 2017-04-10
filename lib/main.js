"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var root = document.documentElement;
var Xatom = (function () {
    function Xatom() {
        var _this = this;
        console.log('Xatom...');
        atom.config['observe']('xatom.fontSize', function (value) {
            _this.fontSize = value;
        });
    }
    Object.defineProperty(Xatom.prototype, "fontSize", {
        get: function () {
            return this._fontSize;
        },
        set: function (value) {
            console.log('set font', value);
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
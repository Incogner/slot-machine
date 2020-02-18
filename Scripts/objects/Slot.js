"use strict";
var objects;
(function (objects) {
    class Slot extends createjs.Container {
        // CONSTRUCTOR
        constructor(symbols, x = 0, y = 0) {
            super();
            this.x = x;
            this.y = y;
            this._roller = new objects.Roller();
            this._symbols = config.Game.SYMBOLS;
            this._currentSymbol = symbols[0];
            this.addChild(this.Roller);
            this.Start();
        }
        // PUBLIC PROPERTIES
        get Roller() {
            return this._roller;
        }
        set Roller(newRoller) {
            this._roller = newRoller;
        }
        // PRIVATE METHODS
        _checkBounds() {
        }
        _checkRange(value, lowerBounds, upperBounds) {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            }
            else {
                return !value;
            }
        }
        _assignSymbol() {
            let outCome = 0;
            outCome = Math.floor((Math.random() * 65) + 1);
            switch (outCome) {
                case this._checkRange(outCome, 1, 27): // 41.5% probability
                    this._currentSymbol = this._symbols[7];
                    config.Game.BLANKS++;
                    break;
                case this._checkRange(outCome, 28, 37): // 15.4% probability
                    this._currentSymbol = this._symbols[6];
                    config.Game.GRAPES++;
                    break;
                case this._checkRange(outCome, 38, 46): // 13.8% probability
                    this._currentSymbol = this._symbols[5];
                    config.Game.PLUMS++;
                    break;
                case this._checkRange(outCome, 47, 54): // 12.3% probability
                    this._currentSymbol = this._symbols[4];
                    config.Game.ORANGES++;
                    break;
                case this._checkRange(outCome, 55, 59): //  7.7% probability
                    this._currentSymbol = this._symbols[3];
                    config.Game.CHERRIES++;
                    break;
                case this._checkRange(outCome, 60, 62): //  4.6% probability
                    this._currentSymbol = this._symbols[2];
                    config.Game.BARS++;
                    break;
                case this._checkRange(outCome, 63, 64): //  3.1% probability
                    this._currentSymbol = this._symbols[1];
                    config.Game.BELLS++;
                    break;
                case this._checkRange(outCome, 65, 65): //  1.5% probability
                    this._currentSymbol = this._symbols[0];
                    config.Game.SEVENS++;
                    break;
            }
        }
        // PUBLIC METHODS
        Start() {
        }
        Update() {
        }
        Reset() {
        }
        Spin() {
            this._assignSymbol();
            this.Roller.ShowResult(this._currentSymbol.VerticalPosition);
        }
    }
    objects.Slot = Slot;
})(objects || (objects = {}));
//# sourceMappingURL=Slot.js.map
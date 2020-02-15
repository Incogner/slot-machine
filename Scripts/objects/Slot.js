"use strict";
var objects;
(function (objects) {
    class Slot extends objects.GameObject {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor(symbols, x = 0, y = 0) {
            super(config.Game.ASSETS.getResult("slot"), x, y, false);
            this.roller = new objects.Roller();
            this.symbols = symbols;
            this.currentSymbol = symbols[0];
            this.Start();
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
                    this.currentSymbol = this.symbols[7];
                    break;
                case this._checkRange(outCome, 28, 37): // 15.4% probability
                    this.currentSymbol = this.symbols[6];
                    break;
                case this._checkRange(outCome, 38, 46): // 13.8% probability
                    this.currentSymbol = this.symbols[5];
                    break;
                case this._checkRange(outCome, 47, 54): // 12.3% probability
                    this.currentSymbol = this.symbols[4];
                    break;
                case this._checkRange(outCome, 55, 59): //  7.7% probability
                    this.currentSymbol = this.symbols[3];
                    break;
                case this._checkRange(outCome, 60, 62): //  4.6% probability
                    this.currentSymbol = this.symbols[2];
                    break;
                case this._checkRange(outCome, 63, 64): //  3.1% probability
                    this.currentSymbol = this.symbols[1];
                    break;
                case this._checkRange(outCome, 65, 65): //  1.5% probability
                    this.currentSymbol = this.symbols[0];
                    break;
            }
        }
        roll() {
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
        }
    }
    objects.Slot = Slot;
})(objects || (objects = {}));
//# sourceMappingURL=Slot.js.map
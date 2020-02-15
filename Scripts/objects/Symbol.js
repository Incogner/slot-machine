"use strict";
var objects;
(function (objects) {
    class Symbol extends objects.GameObject {
        // PRIVATE INSTANCE MEMBERS
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor(symbolName = "symbol", image = config.Game.ASSETS.getResult("placeholder")) {
            super(image, 0, 0, true);
            this.name = symbolName;
            this.Start();
        }
        // PRIVATE METHODS
        _checkBounds() {
        }
        // PUBLIC METHODS
        Start() {
        }
        Update() {
        }
        Reset() {
        }
    }
    objects.Symbol = Symbol;
})(objects || (objects = {}));
//# sourceMappingURL=Symbol.js.map
"use strict";
var objects;
(function (objects) {
    class Symbol extends createjs.Container {
        // CONSTRUCTOR
        constructor(symbolName = "blank", verticalPosition = 97) {
            super();
            this.name = symbolName;
            this._verticalPosition = verticalPosition;
        }
        // PUBLIC PROPERTIES
        get VerticalPosition() {
            return this._verticalPosition;
        }
        set VerticalPosition(newPostion) {
            this._verticalPosition = newPostion;
        }
    }
    objects.Symbol = Symbol;
})(objects || (objects = {}));
//# sourceMappingURL=Symbol.js.map
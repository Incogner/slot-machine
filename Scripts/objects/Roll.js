"use strict";
var objects;
(function (objects) {
    class Roll extends objects.GameObject {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor(x = 0, y = 0, speed = 0) {
            super(config.Game.ASSETS.getResult("roller"), x, y, false);
            this._verticalSpeed = speed;
            this.Start();
        }
        // PRIVATE METHODS
        _checkBounds() {
            if (this.y < this.getBounds().height * -1) {
                this.Reset();
            }
        }
        _move() {
            this.y -= this._verticalSpeed;
        }
        // PUBLIC METHODS
        Start() {
        }
        Update() {
            this._move();
        }
        Reset() {
            this.y = 1550 - this._verticalSpeed;
        }
    }
    objects.Roll = Roll;
})(objects || (objects = {}));
//# sourceMappingURL=Roll.js.map
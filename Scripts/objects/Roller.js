"use strict";
var objects;
(function (objects) {
    class Roller extends createjs.Container {
        // CONSTRUCTOR
        constructor(x = 0, y = 0, speed = 60) {
            super();
            this._rolls = new Array();
            this._rolls.push(new objects.Roll(x, y, speed));
            this._rolls.push(new objects.Roll(x, y + 1550, speed));
            this._currentRoll = 0;
            this._speed = speed;
            this.Start();
        }
        // PUBLIC PROPERTIES
        get Rolls() {
            return this._rolls;
        }
        set Rolls(newRolls) {
            this._rolls = newRolls;
        }
        // PRIVATE METHODS
        _checkBounds() {
            let roll = this._rolls[this._currentRoll];
            if (roll.y < roll.getBounds().height * -1) {
                this._toggleRoll();
                roll.Reset();
            }
        }
        _toggleRoll() {
            if (this._currentRoll === 0) {
                this._currentRoll = 1;
            }
            else {
                this._currentRoll = 0;
            }
        }
        // PUBLIC METHODS
        Start() {
        }
        Update() {
            this._checkBounds();
            this._rolls.forEach((roll) => {
                roll.Update();
            });
        }
        Reset() {
        }
        Animate() {
            if (!this._animate) {
                this._animate = true;
            }
        }
        Stop() {
            if (this._animate) {
                this._animate = false;
            }
        }
    }
    objects.Roller = Roller;
})(objects || (objects = {}));
//# sourceMappingURL=Roller.js.map
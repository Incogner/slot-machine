"use strict";
var objects;
(function (objects) {
    class Roller extends createjs.Container {
        // CONSTRUCTOR
        constructor(x = 0, y = -1257, speed = 50) {
            super();
            this._rolls = new Array();
            this._rolls.push(new objects.Roll(x, y + 1550, speed));
            this._rolls.push(new objects.Roll(x, y, speed));
            this._currentRoll = 0;
            this._speed = speed;
            this._round = 0;
            let that = this;
            this._rolls.forEach((roll) => {
                that.addChild(roll);
            });
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
        /**
         * If a roll is at the top of view, then will reset the position to go down
         *
         * @protected
         * @memberof Roller
         */
        _checkBounds() {
            let roll = this._rolls[this._currentRoll];
            if (roll.y < roll.getBounds().height * -1) {
                this._toggleRoll();
                roll.Reset();
                this._round++;
            }
            if (this._round > 3) {
                this._rolls.forEach((roll) => {
                    roll.ReduceSpeed = true;
                });
            }
        }
        /**
         * This method will toggle between current roll in the view
         *
         * @protected
         * @memberof Roller
         */
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
        StartRoller(roll, roll2) {
            // this.removeAllChildren();
            // this._rolls = new Array();
            // this._rolls.push(roll2);
            // this._rolls.push(roll);
            // this._round = 0;
            // this.addChild(this._rolls[0]);
            // this.addChild(this._rolls[1]);
        }
        ShowResult(symbolY) {
            this.Rolls[0].y = symbolY - 1550;
            this.Rolls[1].y = symbolY;
        }
        /**
         * This update will check for current roller in the view and also running update for both rolls
         *
         * @memberof Roller
         */
        Update() {
            this._checkBounds();
            this._rolls.forEach((roll) => {
                roll.Update();
            });
        }
        Reset() {
        }
    }
    objects.Roller = Roller;
})(objects || (objects = {}));
//# sourceMappingURL=Roller.js.map
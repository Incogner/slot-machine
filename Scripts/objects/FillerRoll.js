"use strict";
var objects;
(function (objects) {
    class FillerRoll extends objects.GameObject {
        // CONSTRUCTOR
        constructor(x = 0, y = 0, speed = 0, stopSymbol) {
            super(config.Game.ASSETS.getResult("roller"), x, y, false);
            this._verticalSpeed = 0;
            //this._symbols = config.Game.SYMBOLS;
            //this._moving = false;
            this._stop = false;
            this._accelerate = 0.05;
            this._starting = true;
            this._round = 0;
            this.Start();
        }
        // PUBLIC PROPERTIES
        get Starting() {
            return this._starting;
        }
        set Starting(n) {
            this._starting = n;
        }
        get Speed() {
            return this._verticalSpeed;
        }
        set Speed(newSpeed) {
            this._verticalSpeed = newSpeed;
        }
        get Accelerate() {
            return this._accelerate;
        }
        set Accelerate(newValue) {
            this._accelerate = newValue;
        }
        get Stop() {
            return this._stop;
        }
        set Stop(newState) {
            this._stop = newState;
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
        _reduceSpeed() {
            if (this.Speed > 0) {
                this.Speed -= this.Accelerate;
                console.log(this.Speed + " in interval");
            }
        }
        // PUBLIC METHODS
        Start() {
            this._verticalSpeed = 0;
            //this._symbols = config.Game.SYMBOLS;
            //this._moving = false;
            //this._stop = true;
            this._accelerate = 0.05;
            this._starting = true;
            this._round = 0;
        }
        Update() {
            if (this._starting && this._verticalSpeed < 5) {
                this.Speed += this.Accelerate;
            }
            this._move();
            if (this._round > 0 && this._verticalSpeed > 0) {
                this._verticalSpeed -= 0.084;
                if (this._verticalSpeed < 0) {
                    this._verticalSpeed = 0;
                }
                if (this._starting) {
                    this._starting = false;
                }
            }
        }
        StartAnimation() {
            this.Starting = true;
            this.Speed = 5;
            this.Stop = false;
        }
        /**
         * The method to stop the roll on specific symbol
         *
         * @memberof Roll
         */
        StopAnimation(symbol) {
            this.Stop = true;
        }
        /**
         * This will reset the the roll and move it to down of the page
         *
         * @memberof Roll
         */
        Reset() {
            this.y = 1550 - this._verticalSpeed;
            this._round++;
        }
    }
    objects.FillerRoll = FillerRoll;
})(objects || (objects = {}));
//# sourceMappingURL=FillerRoll.js.map
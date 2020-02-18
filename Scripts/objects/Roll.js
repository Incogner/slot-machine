"use strict";
var objects;
(function (objects) {
    class Roll extends objects.GameObject {
        // CONSTRUCTOR
        constructor(x = 0, y = 0, speed = 0, stopSymbol) {
            super(config.Game.ASSETS.getResult("roller"), x, y, false);
            this._verticalSpeed = 0;
            //this._symbols = config.Game.SYMBOLS;
            //this._moving = false;
            this._stop = false;
            this._speed = speed;
            this._accelerate = 2;
            this._starting = false;
            this._lockedSymbol = new objects.Symbol();
            this._hasStopSymbol = false;
            this._reduceSpeed = false;
            if (stopSymbol) {
                this._hasStopSymbol = true;
                this._lockedSymbol = stopSymbol;
                //this.StopAnimation(stopSymbol);
            }
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
            return this._speed;
        }
        set Speed(newSpeed) {
            this._speed = newSpeed;
        }
        get Stop() {
            return this._stop;
        }
        set Stop(newState) {
            this._stop = newState;
        }
        get ReduceSpeed() {
            return this._reduceSpeed;
        }
        set ReduceSpeed(newState) {
            this._reduceSpeed = newState;
        }
        // PRIVATE METHODS
        _checkBounds() {
            if (this.y < this.getBounds().height * -1) {
                //this.Reset();
            }
        }
        _move() {
            this.y -= this._verticalSpeed;
        }
        // protected _reduceSpeed(): void{
        //         if(this.Speed > 0){
        //             this.Speed -= this.Accelerate;
        //             console.log(this.Speed +" in interval");
        //         }
        // }
        // PUBLIC METHODS
        Start() {
        }
        Update() {
            if (this._starting && this._verticalSpeed < this._speed) {
                this._verticalSpeed += this._accelerate;
            }
            this._move();
            if (this.ReduceSpeed && this._verticalSpeed > 0) {
                if (this._hasStopSymbol && this.y < this._lockedSymbol.VerticalPosition * -1) {
                }
                this._verticalSpeed -= this._accelerate;
                if (this._verticalSpeed < 0) {
                    this._verticalSpeed = 0;
                }
                if (this._starting) {
                    this._starting = false;
                }
            }
        }
        /**
         * This will reset the the roll and move it to down of the page
         *
         * @memberof Roll
         */
        Reset() {
            this.y = this.y - 1550 - this._verticalSpeed;
        }
    }
    objects.Roll = Roll;
})(objects || (objects = {}));
//# sourceMappingURL=Roll.js.map
"use strict";
var objects;
(function (objects) {
    class Plane extends objects.GameObject {
        //PUBLIC PROPERTIES
        //CONSTRUCTOR
        constructor() {
            super(config.Game.ASSETS.getResult("plane"), 0, 0, true);
            this.Start();
        }
        //PRIVATE METHODS
        _checkBounds() {
            if (this.position.x <= this.halfWidth) {
                this.position = new objects.Vector2(this.halfWidth, this.position.y);
            }
            if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.position = new objects.Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }
        }
        _move() {
            //this.position = Vector2.add(this.position, this.Velocity);
            let mouseX = config.Game.STAGE.mouseX;
            this.position = new objects.Vector2(mouseX, 430);
        }
        //PUBLIC METHODS
        Start() {
            //this._verticalSpeed = 5; // 5 pixels per frame
            //this.Velocity = new Vector2(0, this._verticalSpeed);
        }
        Update() {
            this._move();
            this._checkBounds();
        }
        Reset() {
        }
    }
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=Plane.js.map
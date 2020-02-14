"use strict";
var objects;
(function (objects) {
    class Player extends objects.GameObject {
        // PRIVATE INSTANCE MEMBERS
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super("./Assets/images/placeholder.png", 0, 0, true);
            this.Start();
        }
        // PRIVATE METHODS
        _checkBounds() {
        }
        // PUBLIC METHODS
        Start() {
        }
        Update() {
            let mouseX = config.Game.STAGE.mouseX;
            let mouseY = config.Game.STAGE.mouseY;
            this.position = new objects.Vector2(mouseX, mouseY);
        }
        Reset() {
        }
    }
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=Player.js.map
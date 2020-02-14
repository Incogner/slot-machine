"use strict";
var objects;
(function (objects) {
    class Button extends objects.GameObject {
        //constructor
        constructor(imagePath = "./Assets/images/placeholder.png", x = 0, y = 0, isCentered = true) {
            super(imagePath, x, y, isCentered);
            this.on("mouseover", this.HoverOver);
            this.on("mouseout", this.HoverOut);
            this.Start();
        }
        // PUBLIC METHODS
        HoverOver() {
            this.alpha = 0.7;
        }
        HoverOut() {
            this.alpha = 1.0;
        }
        // PUBLIC LIFE CYCLE METHODS
        // initialization method
        Start() {
        }
        Update() {
        }
        Reset() {
        }
        // PRIVATE LIFE CYCLE METHODS
        _checkBounds() {
        }
    }
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=Button.js.map
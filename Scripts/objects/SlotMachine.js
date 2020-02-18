"use strict";
var objects;
(function (objects) {
    class SlotMachine extends objects.GameObject {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor(slotNo = 3, image = config.Game.ASSETS.getResult("slotmachine")) {
            super(image, 0, 0, false);
            // PRIVATE INSTANCE MEMBERS
            this._rolling = false;
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
    objects.SlotMachine = SlotMachine;
})(objects || (objects = {}));
//# sourceMappingURL=SlotMachine.js.map
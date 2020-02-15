"use strict";
var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor(slotNo = 3) {
            super();
            // initialization
            this._slotMachine = new objects.SlotMachine();
            this._closeButton = new objects.Button();
            this._symbols = new Array();
            this._symbols.push(new objects.Symbol("Seven"));
            this._symbols.push(new objects.Symbol("Plum"));
            this._symbols.push(new objects.Symbol("Orange"));
            this._symbols.push(new objects.Symbol("Bar"));
            this._symbols.push(new objects.Symbol("Grape"));
            this._symbols.push(new objects.Symbol("Cherry"));
            this._symbols.push(new objects.Symbol("Bell"));
            this._symbols.push(new objects.Symbol("Blank"));
            // Create the slots by specified number
            this._noOfSlots = slotNo;
            this._slots = new Array();
            this._rollers = new Array();
            //Placing slots in UI location
            var i = 1;
            var xloc = 196;
            while (i <= slotNo) {
                this._slots.push(new objects.Slot(this._symbols, xloc, 143));
                this._rollers.push(new objects.Roller(xloc, 143));
                i++;
                xloc += 219;
            }
            this._rollers[0].y = -1150;
            this.Start();
        }
        // PUBLIC METHODS
        Start() {
            this._slotMachine = new objects.SlotMachine();
            this.Main();
        }
        Update() {
            this._slotMachine.Update();
            this._slots.forEach((slot) => {
                slot.Update();
            });
            this._rollers.forEach((roll) => {
                roll.Update();
            });
        }
        Main() {
            let that = this;
            this._rollers.forEach((roller) => {
                roller.Rolls.forEach((roll) => {
                    that.addChild(roll);
                });
                that.addChild(roller);
            });
            this._slots.forEach((slot) => {
                that.addChild(slot);
            });
            this.addChild(this._slotMachine);
        }
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map
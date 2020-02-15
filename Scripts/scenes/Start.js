"use strict";
var scenes;
(function (scenes) {
    class Start extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super();
            // initialization
            this.startLabel = new objects.Label();
            this.startButton = new objects.Button();
            this.Start();
        }
        // PUBLIC METHODS
        Start() {
            this.startLabel = new objects.Label("The Game", "80px", "Consolas", "#000000", 320, 200, true);
            this.startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 400, true);
            this.Main();
        }
        Update() {
        }
        Main() {
            this.addChild(this.startLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
        }
    }
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map
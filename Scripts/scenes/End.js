"use strict";
var scenes;
(function (scenes) {
    class End extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super();
            // initialization
            this.endLabel = new objects.Label();
            this.endButton = new objects.Button();
            this.Start();
        }
        // PUBLIC METHODS
        Start() {
            this.endLabel = new objects.Label("End Scene", "80px", "Consolas", "#000000", 320, 200, true);
            this.endButton = new objects.Button("./Assets/images/backButton.png", 320, 400, true);
            this.Main();
        }
        Update() {
        }
        Main() {
            this.addChild(this.endLabel);
            this.addChild(this.endButton);
            this.endButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
        }
    }
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=End.js.map
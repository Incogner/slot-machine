"use strict";
var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super();
            // initialization
            this.playLabel = new objects.Label();
            this.nextButton = new objects.Button();
            this.Start();
        }
        // PUBLIC METHODS
        Start() {
            this.playLabel = new objects.Label("Play Game", "80px", "Consolas", "#000000", 320, 200, true);
            this.nextButton = new objects.Button("./Assets/images/nextButton.png", 320, 400, true);
            this.Main();
        }
        Update() {
        }
        Main() {
            this.addChild(this.playLabel);
            this.addChild(this.nextButton);
            this.nextButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.END;
            });
        }
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map
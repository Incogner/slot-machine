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
            this.player = new objects.Player();
            this.Start();
        }
        // PUBLIC METHODS
        Start() {
            this.startLabel = new objects.Label("The Game", "80px", "Consolas", "#000000", 320, 200, true);
            this.startButton = new objects.Button("./Assets/images/startButton.png", 320, 400, true);
            this.player = new objects.Player();
            this.Main();
        }
        Update() {
            this.player.Update();
            //managers.Collision.squaredRadiusCheck(player, startButton);
            managers.Collision.AABBCheck(this.player, this.startButton);
        }
        Main() {
            this.addChild(this.startLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
            this.addChild(this.player);
        }
    }
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map
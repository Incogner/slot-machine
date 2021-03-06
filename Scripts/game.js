"use strict";
//IIFE - Imediately Invoked Function Expression
//Means: is an anonymous self-executing function
let game = (function () {
    let canvas = document.getElementsByTagName('canvas')[0];
    let stage;
    let currentSceneState;
    let currentScene;
    let assets;
    let assetsManifest = [
        { id: "startButton", src: "./Assets/images/startButton.png" },
        { id: "resetButton", src: "./Assets/images/resetButton.png" },
        { id: "placeholder", src: "./Assets/images/placeholder.png" },
        { id: "spinButton", src: "./Assets/images/spin.png" },
        { id: "slot", src: "./Assets/images/slot.png" },
        { id: "slotmachine", src: "./Assets/images/slotmachine.png" },
        { id: "roller", src: "./Assets/images/roller.png" },
        { id: "addBet", src: "./Assets/images/plus.png" },
        { id: "deductBet", src: "./Assets/images/minus.png" }
    ];
    function Preload() {
        assets = new createjs.LoadQueue();
        config.Game.ASSETS = assets;
        assets.installPlugin(createjs.Sound);
        assets.loadManifest(assetsManifest);
        assets.on("complete", Start);
    }
    /**
     * Perform Initialization in the Start function
     *
     */
    function Start() {
        stage = new createjs.Stage(canvas);
        stage.name = "Main Stage";
        config.Game.STAGE = stage; // create a reference to the Global Stage
        createjs.Ticker.framerate = 60; // declare the framerate as 60FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE_STATE = scenes.State.START;
    }
    /**
     * This is the main Game Loop
     * This function 'triggers' every frame
     */
    function Update() {
        if (currentSceneState != config.Game.SCENE_STATE) {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    /**
     * This function is the main function of the game
     *
     */
    function Main() {
        // Clean Up
        if (currentSceneState != scenes.State.NO_SCENE) {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }
        // State Machine
        switch (config.Game.SCENE_STATE) {
            case scenes.State.START:
                currentScene = new scenes.Start();
                break;
            case scenes.State.PLAY:
                currentScene = new scenes.Play();
                break;
            case scenes.State.END:
                //currentScene = new scenes.End();
                break;
        }
        // add the scene to the stage and setup the current scene
        stage.addChild(currentScene);
        currentSceneState = config.Game.SCENE_STATE;
    }
    window.addEventListener("load", Preload);
})();
//# sourceMappingURL=game.js.map
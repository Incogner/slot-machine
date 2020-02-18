module scenes
{
    export class Start extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _startLabel:objects.Label;
        private _startButton:objects.Button;
        private _slotMachine:objects.GameObject;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this._startLabel = new objects.Label();
            this._startButton = new objects.Button();
            this._slotMachine = new objects.SlotMachine();

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this._startLabel = new objects.Label("Slot Machine Game", "80px","Consolas", "red", 512, 312, true);
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 810, 610, true);
            this._slotMachine = new objects.SlotMachine();
           
            this.Main();
        }        
        
        public Update(): void {

        }
        
        public Main(): void {
            this.addChild(this._slotMachine);
            this.addChild(this._startLabel);
            this.addChild(this._startButton);
            
    
            this._startButton.on("click", function() {
               config.Game.SCENE_STATE = scenes.State.PLAY;
            });
        }
    }
}
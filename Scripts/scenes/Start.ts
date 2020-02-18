module scenes
{
    export class Start extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _startLabel:objects.Label;
        private _startButton:objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this._startLabel = new objects.Label();
            this._startButton = new objects.Button();

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this._startLabel = new objects.Label("The Game", "80px","Consolas", "#000000", 320, 200, true);
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 400, true);
           
            this.Main();
        }        
        
        public Update(): void {

        }
        
        public Main(): void {
            
            this.addChild(this._startLabel);
    
            this.addChild(this._startButton);
    
            this._startButton.on("click", function() {
               config.Game.SCENE_STATE = scenes.State.PLAY;
            });
        }
    }
}
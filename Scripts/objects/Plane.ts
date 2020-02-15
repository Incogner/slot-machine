module objects{
    export class Plane extends GameObject{

        //PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?:number;

        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor(){
            super(config.Game.ASSETS.getResult("plane"), 0, 0, true);

            this.Start();
        }

        //PRIVATE METHODS
        protected _checkBounds(): void {

            if(this.position.x <= this.halfWidth){
                this.position = new Vector2(this.halfWidth, this.position.y);
            }

            if(this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth){
                this.position = new Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }
            
        }
        protected _move(): void{
            //this.position = Vector2.add(this.position, this.Velocity);
            let mouseX = config.Game.STAGE.mouseX;

           this.position = new Vector2(mouseX, 430);
        }

        //PUBLIC METHODS
        public Start(): void {
            
            //this._verticalSpeed = 5; // 5 pixels per frame
            //this.Velocity = new Vector2(0, this._verticalSpeed);
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }
        public Reset(): void {

        }
    }
}
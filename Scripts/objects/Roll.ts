module objects {
    export class Roll extends GameObject{

        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed:number;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor(x:number = 0, y:number =0, speed:number = 0)
        {
            super(config.Game.ASSETS.getResult("roller"), x, y, false);

            this._verticalSpeed = speed;
            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void {
            if(this.y < this.getBounds().height * -1){
                this.Reset();
            }
        }     

        protected _move():void {
            this.y -= this._verticalSpeed;
        }

        // PUBLIC METHODS
        public Start(): void {
            
        }

        public Update(): void {
            this._move();
        }

        public Reset(): void {
            this.y = 1550 - this._verticalSpeed;
        }
    }
}
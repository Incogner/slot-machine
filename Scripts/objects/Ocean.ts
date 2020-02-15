module objects{
    export class Ocean extends GameObject{
        
        //PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?:number;

        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        constructor(){
            super(config.Game.ASSETS.getResult("ocean"));

            this.Start();
        }

        //PRIVATE METHODS
        protected _checkBounds(): void {
            if(this.position.y >= 0){
                this.Reset();
            }
            
        }
        protected _move(): void{
            this.position = Vector2.add(this.position, this.Velocity);
        }

        //PUBLIC METHODS
        public Start(): void {
            
            this._verticalSpeed = 5; // 5 pixels per frame
            this.Velocity = new Vector2(0, this._verticalSpeed);
        }

        public Update(): void {
            this._move();
            this._checkBounds();
            
        }
        public Reset(): void {
            this.position.y = -960;
        }
    }
}
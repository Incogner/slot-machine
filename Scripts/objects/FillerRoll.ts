module objects {
    export class FillerRoll extends GameObject{

        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed:number; // speed of animation
        private _accelerate:number; // acceleration
        //private _moving:boolean; // check if the animation is running
        private _stop:boolean;
        private _round:number;
        private _starting:boolean;

        // PUBLIC PROPERTIES
        get Starting():boolean{
            return this._starting;
        }

        set Starting(n:boolean){
            this._starting = n;
        }

        get Speed(): number{
            return this._verticalSpeed;
        }

        set Speed(newSpeed:number){
            this._verticalSpeed = newSpeed;
        }
        get Accelerate(): number{
            return this._accelerate;
        }

        set Accelerate(newValue:number){
            this._accelerate = newValue;
        }

        get Stop(): boolean{
            return this._stop;
        }

        set Stop(newState:boolean){
            this._stop = newState;
        }

        // CONSTRUCTOR
        constructor(x:number = 0, y:number =0, speed:number = 0, stopSymbol?:objects.Symbol)
        {
            super(config.Game.ASSETS.getResult("roller"), x, y, false);

            this._verticalSpeed = 0;
            //this._symbols = config.Game.SYMBOLS;
            //this._moving = false;
            this._stop = false;
            this._accelerate = 0.05;
            this._starting = true;
            this._round = 0;
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

        protected _reduceSpeed(): void{
            
                if(this.Speed > 0){
                    this.Speed -= this.Accelerate;
                    console.log(this.Speed +" in interval");
                }
        }

        // PUBLIC METHODS
        public Start(): void {
            this._verticalSpeed = 0;
            //this._symbols = config.Game.SYMBOLS;
            //this._moving = false;
            //this._stop = true;
            this._accelerate = 0.05;
            this._starting = true;
            this._round = 0;
        }

        public Update(): void {
            if(this._starting && this._verticalSpeed < 5){
                this.Speed += this.Accelerate;
            }
            this._move();
            if(this._round > 0 && this._verticalSpeed > 0){
                this._verticalSpeed -= 0.084;
                    if(this._verticalSpeed < 0){
                        this._verticalSpeed = 0;
                    }
                if(this._starting){
                    this._starting = false;
                }
            }
        }

        public StartAnimation(){

            this.Starting = true;
            this.Speed = 5;
            this.Stop = false;
        }

        /**
         * The method to stop the roll on specific symbol
         *
         * @memberof Roll
         */
        public StopAnimation(symbol:objects.Symbol): void{
            this.Stop = true;
        }

        /**
         * This will reset the the roll and move it to down of the page
         *
         * @memberof Roll
         */
        public Reset(): void {
            this.y = 1550 - this._verticalSpeed;
            this._round ++;
        }
    }
}
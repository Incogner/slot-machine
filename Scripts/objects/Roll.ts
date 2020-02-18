module objects {
    export class Roll extends GameObject{

        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed:number; // speed of animation
        private _speed:number;
        private _accelerate:number; // acceleration
        private _lockedSymbol:objects.Symbol; // the symbol to stop on
        private _stop:boolean;
        private _hasStopSymbol:boolean;
        private _starting:boolean;
        private _reduceSpeed:boolean;

        // PUBLIC PROPERTIES
        get Starting():boolean{
            return this._starting;
        }

        set Starting(n:boolean){
            this._starting = n;
        }

        get Speed(): number{
            return this._speed;
        }

        set Speed(newSpeed:number){
            this._speed = newSpeed;
        }

        get Stop(): boolean{
            return this._stop;
        }

        set Stop(newState:boolean){
            this._stop = newState;
        }

        get ReduceSpeed(){
            return this._reduceSpeed;
        }

        set ReduceSpeed(newState:boolean){
            this._reduceSpeed = newState;
        }

        // CONSTRUCTOR
        constructor(x:number = 0, y:number =0, speed:number = 0, stopSymbol?:objects.Symbol)
        {
            super(config.Game.ASSETS.getResult("roller"), x, y, false);

            this._verticalSpeed = 0;
            //this._symbols = config.Game.SYMBOLS;
            //this._moving = false;
            this._stop = false;
            this._speed = speed;
            this._accelerate = 2;
            this._starting = false;
            this._lockedSymbol = new Symbol();
            this._hasStopSymbol = false;
            this._reduceSpeed = false;
            if(stopSymbol){
                this._hasStopSymbol = true;
                this._lockedSymbol = stopSymbol;
                //this.StopAnimation(stopSymbol);
            }
            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void {
            if(this.y < this.getBounds().height * -1){
                //this.Reset();
            }
            
        }     

        protected _move():void {
            this.y -= this._verticalSpeed;
        }

        // protected _reduceSpeed(): void{
            
        //         if(this.Speed > 0){
        //             this.Speed -= this.Accelerate;
        //             console.log(this.Speed +" in interval");
        //         }
        // }

        // PUBLIC METHODS
        public Start(): void {
            
        }

        public Update(): void {
            if(this._starting && this._verticalSpeed < this._speed){
                this._verticalSpeed += this._accelerate;
            }
            this._move();
            if(this.ReduceSpeed && this._verticalSpeed > 0){
                if(this._hasStopSymbol && this.y < this._lockedSymbol.VerticalPosition * -1){
                    
                }  
                this._verticalSpeed -= this._accelerate;
                if(this._verticalSpeed < 0){
                    this._verticalSpeed = 0;
                }
                if(this._starting){
                    this._starting = false;
                }
            }
        }

        /**
         * This will reset the the roll and move it to down of the page
         *
         * @memberof Roll
         */
        public Reset(): void {
            this.y = this.y - 1550 - this._verticalSpeed;
            
        }
    }
}
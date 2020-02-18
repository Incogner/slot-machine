module objects {
    export class Roller extends createjs.Container{

        // PRIVATE INSTANCE MEMBERS
        private _speed:number; // the speed of animate
        private _rolls:Roll[]; // set of two rolls in the view to animate
        private _currentRoll:number; // the current roll in the view
        private _round:number;

        // PUBLIC PROPERTIES
        get Rolls():Roll[]{
            return this._rolls;
        }

        set Rolls(newRolls:Roll[]){
            this._rolls = newRolls;
        }


        // CONSTRUCTOR
        constructor(x:number = 0, y:number = -1257, speed:number = 50)
        {
            super();

            this._rolls = new Array();
            this._rolls.push(new Roll(x, y + 1550, speed));
            this._rolls.push(new Roll(x, y, speed));
            this._currentRoll = 0;
            this._speed = speed;
            this._round = 0;

            let that = this;
            this._rolls.forEach( (roll) => {
                that.addChild(roll);
            });
            this.Start();

        }

        // PRIVATE METHODS
        
        /**
         * If a roll is at the top of view, then will reset the position to go down
         *
         * @protected
         * @memberof Roller
         */
        protected _checkBounds(): void {
            let roll = this._rolls[this._currentRoll];
            if(roll.y < roll.getBounds().height * -1){
                this._toggleRoll();
                roll.Reset();
                this._round++;
            }
            if(this._round>3){
                this._rolls.forEach( (roll) => {
                    roll.ReduceSpeed = true;
                });
            }

        }  
        
        /**
         * This method will toggle between current roll in the view
         *
         * @protected
         * @memberof Roller
         */
        protected _toggleRoll(): void{
            if (this._currentRoll === 0){
                this._currentRoll = 1;
            } else {
                this._currentRoll = 0;
            }
        }

        // PUBLIC METHODS
        public Start(): void {
        }

        public StartRoller(roll?:Roll, roll2?:Roll): void {

            // this.removeAllChildren();
            // this._rolls = new Array();
            // this._rolls.push(roll2);
            // this._rolls.push(roll);
            // this._round = 0;

            // this.addChild(this._rolls[0]);
            // this.addChild(this._rolls[1]);

        }

        public ShowResult(symbolY:number):void{

            this.Rolls[0].y = symbolY - 1550;
            this.Rolls[1].y = symbolY;
        }

        /**
         * This update will check for current roller in the view and also running update for both rolls
         *
         * @memberof Roller
         */
        public Update(): void {
            this._checkBounds();
            this._rolls.forEach((roll) => {
                roll.Update();
            });
        }

        public Reset(): void {
            
        }
    }
}
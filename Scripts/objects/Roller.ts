module objects {
    export class Roller extends createjs.Container{

        // PRIVATE INSTANCE MEMBERS
        private _speed:number;
        private _animate:boolean;
        private _rolls:Roll[];
        private _currentRoll:number;

        // PUBLIC PROPERTIES
        get Rolls(){
            return this._rolls;
        }

        set Rolls(newRolls:Roll[]){
            this._rolls = newRolls;
        }

        // CONSTRUCTOR
        constructor(x:number = 0, y:number =0, speed:number = 60)
        {
            super();

            this._rolls = new Array();
            this._rolls.push(new Roll(x, y, speed));
            this._rolls.push(new Roll(x, y + 1550, speed));
            this._currentRoll = 0;
            this._speed = speed;
            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void {
            let roll = this._rolls[this._currentRoll];
            if(roll.y < roll.getBounds().height * -1){
                this._toggleRoll();
                roll.Reset();
            }
            
        }  
        
        protected _toggleRoll(): void{
            if(this._currentRoll === 0){
                this._currentRoll = 1;
            }else {
                this._currentRoll = 0;
            }
        }

        // PUBLIC METHODS
        public Start(): void {

        }

        public Update(): void {
            this._checkBounds();
            this._rolls.forEach((roll) => {
                roll.Update();
            });
        }

        public Reset(): void {
            
        }

        public Animate(): void{
            if(!this._animate){
                this._animate = true;
            }
        }

        public Stop(): void{
            if(this._animate){
                this._animate = false;
            }
        }
    }
}
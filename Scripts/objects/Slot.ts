module objects{
    export class Slot extends createjs.Container{

        // PRIVATE INSTANCE MEMBERS
        private _currentSymbol:Symbol;
        private _symbols:Symbol[];
        private _roller:Roller;

        // PUBLIC PROPERTIES
        get Roller(): Roller {
            return this._roller;
        }

        set Roller(newRoller:Roller){
            this._roller = newRoller;
        }

        // CONSTRUCTOR
        constructor(symbols:Symbol[], x:number = 0, y:number =0)
        {
            super();
            this.x = x;
            this.y = y;

            this._roller = new Roller();
            this._symbols = config.Game.SYMBOLS;
            this._currentSymbol = symbols[0];
            this.addChild(this.Roller);
            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void {
            
        }

        protected _checkRange(value:number, lowerBounds:number, upperBounds:number) {
            if (value >= lowerBounds && value <= upperBounds)
            {
                return value;
            }
            else {
                return !value;
            }
        }
        
        protected _assignSymbol():void{
            let outCome = 0;
            outCome = Math.floor((Math.random() * 65) + 1);
            switch (outCome) {
                case this._checkRange(outCome, 1, 27):  // 41.5% probability
                    this._currentSymbol = this._symbols[7];
                    config.Game.BLANKS++;
                    break;
                case this._checkRange(outCome, 28, 37): // 15.4% probability
                    this._currentSymbol = this._symbols[6];
                    config.Game.GRAPES++;
                    break;
                case this._checkRange(outCome, 38, 46): // 13.8% probability
                    this._currentSymbol = this._symbols[5];
                    config.Game.PLUMS++;
                    break;
                case this._checkRange(outCome, 47, 54): // 12.3% probability
                    this._currentSymbol = this._symbols[4];
                    config.Game.ORANGES++;
                    break;
                case this._checkRange(outCome, 55, 59): //  7.7% probability
                    this._currentSymbol = this._symbols[3];
                    config.Game.CHERRIES++;
                    break;
                case this._checkRange(outCome, 60, 62): //  4.6% probability
                    this._currentSymbol = this._symbols[2];
                    config.Game.BARS++;
                    break;
                case this._checkRange(outCome, 63, 64): //  3.1% probability
                    this._currentSymbol = this._symbols[1];
                    config.Game.BELLS++;
                    break;
                case this._checkRange(outCome, 65, 65): //  1.5% probability
                    this._currentSymbol = this._symbols[0];
                    config.Game.SEVENS++;
                    break;
            }
        }

        // PUBLIC METHODS
        public Start(): void {
            
        }

        public Update(): void {

        }

        public Reset(): void {
         
        }

        public Spin(): void {
            this._assignSymbol();
            this.Roller.ShowResult(this._currentSymbol.VerticalPosition);
        }
    }
}
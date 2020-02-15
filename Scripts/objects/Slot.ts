module objects{
    export class Slot extends GameObject{

        // PRIVATE INSTANCE MEMBERS
        currentSymbol:Symbol;
        symbols:Symbol[];
        roller:Roller;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor(symbols:Symbol[], x:number = 0, y:number =0)
        {
            super(config.Game.ASSETS.getResult("slot"), x, y, false);

            this.roller = new Roller();
            this.symbols = symbols;
            this.currentSymbol = symbols[0];
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
                    this.currentSymbol = this.symbols[7];
                    break;
                case this._checkRange(outCome, 28, 37): // 15.4% probability
                    this.currentSymbol = this.symbols[6];
                    break;
                case this._checkRange(outCome, 38, 46): // 13.8% probability
                    this.currentSymbol = this.symbols[5];
                    break;
                case this._checkRange(outCome, 47, 54): // 12.3% probability
                    this.currentSymbol = this.symbols[4];
                    break;
                case this._checkRange(outCome, 55, 59): //  7.7% probability
                    this.currentSymbol = this.symbols[3];
                    break;
                case this._checkRange(outCome, 60, 62): //  4.6% probability
                    this.currentSymbol = this.symbols[2];
                    break;
                case this._checkRange(outCome, 63, 64): //  3.1% probability
                    this.currentSymbol = this.symbols[1];
                    break;
                case this._checkRange(outCome, 65, 65): //  1.5% probability
                    this.currentSymbol = this.symbols[0];
                    break;
            }
        }

        protected roll():void{

        }

        // PUBLIC METHODS
        public Start(): void {
            
        }

        public Update(): void {
        }

        public Reset(): void {
         
        }

        public Spin():void {
            this._assignSymbol();

        }
        
    }
}
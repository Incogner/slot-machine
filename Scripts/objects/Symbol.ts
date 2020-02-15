module objects {
    export class Symbol extends GameObject{

        // PRIVATE INSTANCE MEMBERS

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor(symbolName:string = "symbol", image:object = config.Game.ASSETS.getResult("placeholder"))
        {
            super(image, 0, 0, true);

            this.name = symbolName;
            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void {
            
        }      

        // PUBLIC METHODS
        public Start(): void {
            
        }

        public Update(): void {
        }

        public Reset(): void {
            
        }
    }
}
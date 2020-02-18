module objects {
    export class Symbol extends createjs.Container{

        // PRIVATE INSTANCE MEMBERS
        private _verticalPosition: number;

        // PUBLIC PROPERTIES
        get VerticalPosition(){
            return this._verticalPosition;
        }

        set VerticalPosition(newPostion:number){
            this._verticalPosition = newPostion;
        }

        // CONSTRUCTOR
        constructor(symbolName:string = "blank", verticalPosition:number = 97)
        {
            super();
            this.name = symbolName;
            this._verticalPosition = verticalPosition;
        }
    }
}
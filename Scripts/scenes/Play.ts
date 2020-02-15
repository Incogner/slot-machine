module scenes
{
    export class Play extends objects.Scene
    {
         // PRIVATE INSTANCE MEMBERS
         private _noOfSlots:number;
         private _slots:objects.Slot[];
         private _rollers:objects.Roller[];
         private _symbols:objects.Symbol[];
         private _closeButton:objects.Button;
         private _slotMachine:objects.SlotMachine;
 
 
         // PUBLIC PROPERTIES
 
         // CONSTRUCTOR
         constructor(slotNo:number = 3)
         {
             super();
 
             // initialization
             this._slotMachine = new objects.SlotMachine();
             this._closeButton = new objects.Button();

             this._symbols = new Array();
             this._symbols.push(new objects.Symbol("Seven"));
             this._symbols.push(new objects.Symbol("Plum"));
             this._symbols.push(new objects.Symbol("Orange"));
             this._symbols.push(new objects.Symbol("Bar"));
             this._symbols.push(new objects.Symbol("Grape"));
             this._symbols.push(new objects.Symbol("Cherry"));
             this._symbols.push(new objects.Symbol("Bell"));
             this._symbols.push(new objects.Symbol("Blank"));


             // Create the slots by specified number
             this._noOfSlots = slotNo;
             this._slots = new Array();
             
             this._rollers = new Array();

             //Placing slots in UI location
             var i:number = 1;
             var xloc:number = 196;
             while(i<=slotNo) { 
                this._slots.push(new objects.Slot(this._symbols, xloc, 143));
                this._rollers.push(new objects.Roller(xloc, 143));
                i++;
                xloc += 219;
             } 

             this._rollers[0].y = -1150;


 
             this.Start();
         }
 
         // PUBLIC METHODS
 
         public Start(): void 
         {
             this._slotMachine = new objects.SlotMachine();
            
             this.Main();
         }        
         
         public Update(): void {
 
             this._slotMachine.Update();
             this._slots.forEach((slot)=>{
                slot.Update();
             });
             this._rollers.forEach((roll)=>{
                roll.Update();
             });

         }
         
         public Main(): void {
             let that = this;
             
             this._rollers.forEach((roller) => {
                 roller.Rolls.forEach((roll) => {
                    that.addChild(roll);
                 });
                that.addChild(roller);
            });
             this._slots.forEach((slot) => {
                that.addChild(slot);
             });

             this.addChild(this._slotMachine);
     
         }

        
    }
}
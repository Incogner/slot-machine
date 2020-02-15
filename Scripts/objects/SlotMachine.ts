module objects{
    export class SlotMachine extends GameObject{

         // PRIVATE INSTANCE MEMBERS
         
         rolling:boolean = false;


         // PUBLIC PROPERTIES
 
         // CONSTRUCTOR
         constructor(slotNo:number = 3, image:object = config.Game.ASSETS.getResult("slotmachine"))
         {
             super(image, 0, 0, false);
 
             
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
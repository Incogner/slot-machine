module config
{
    export class Game
    {
        public static STAGE: createjs.Stage;
        public static SCENE_STATE: scenes.State;
        public static ASSETS: createjs.LoadQueue;
        public static SCREEN_WIDTH:number = 1024;
        public static SCREEN_HEIGHT:number = 768;

        // Display Variables
        public static PLAYER_MONEY: number = 1000;
        public static WINNINGS: number = 0;
        public static JACKPOT: number = 5000;
        public static TURN: number = 0;
        public static PLAYER_BET: number = 0;
        public static WIN_NUMBER: number = 0;
        public static LOSS_NUMBER: number = 0;
        public static WIN_RATIO: number = 0;

        public static SYMBOLS: objects.Symbol[] = [];

        // Results
        public static BLANKS:number = 0;
        public static GRAPES:number = 0;
        public static BELLS:number = 0;
        public static CHERRIES:number = 0;
        public static ORANGES:number = 0;
        public static PLUMS:number = 0;
        public static BARS:number = 0;
        public static SEVENS:number = 0;

    }
}
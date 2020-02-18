"use strict";
var config;
(function (config) {
    class Game {
    }
    Game.SCREEN_WIDTH = 1024;
    Game.SCREEN_HEIGHT = 768;
    // Display Variables
    Game.PLAYER_MONEY = 1000;
    Game.WINNINGS = 0;
    Game.JACKPOT = 5000;
    Game.TURN = 0;
    Game.PLAYER_BET = 0;
    Game.WIN_NUMBER = 0;
    Game.LOSS_NUMBER = 0;
    Game.WIN_RATIO = 0;
    Game.SYMBOLS = [];
    // Results
    Game.BLANKS = 0;
    Game.GRAPES = 0;
    Game.BELLS = 0;
    Game.CHERRIES = 0;
    Game.ORANGES = 0;
    Game.PLUMS = 0;
    Game.BARS = 0;
    Game.SEVENS = 0;
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=game.js.map
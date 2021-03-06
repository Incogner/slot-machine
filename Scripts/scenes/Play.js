"use strict";
var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor(slotNo = 3) {
            super();
            this._fontFamily = "Times New Roman";
            this._fontSize = "30px";
            this._fontColor = "sienna";
            // initialization
            this._slotMachine = new objects.SlotMachine();
            this._spinButton = new objects.Button(config.Game.ASSETS.getResult("spinButton"), 810, 610, true);
            this._resetButton = new objects.Button(config.Game.ASSETS.getResult("resetButton"), 655, 610, true);
            this._addBetButton = new objects.Button(config.Game.ASSETS.getResult("addBet"), 378, 607, true);
            this._deductBetButton = new objects.Button(config.Game.ASSETS.getResult("deductBet"), 182, 607, true);
            // Labels
            this._jackPotTXT = new objects.Label("$ " + config.Game.JACKPOT, this._fontSize, this._fontFamily, this._fontColor, 70, 28, false);
            this._winTXT = new objects.Label(config.Game.WIN_NUMBER.toString(), this._fontSize, this._fontFamily, this._fontColor, 60, 230, false);
            this._lossTXT = new objects.Label(config.Game.LOSS_NUMBER.toString(), this._fontSize, this._fontFamily, this._fontColor, 60, 320, false);
            this._turnTXT = new objects.Label(config.Game.TURN.toString(), this._fontSize, this._fontFamily, this._fontColor, 60, 140, false);
            this._winRateTXT = new objects.Label("% " + config.Game.WIN_RATIO.toString(), "20px", this._fontFamily, this._fontColor, 40, 415, false);
            this._playerMoneyTXT = new objects.Label("$ " + config.Game.PLAYER_MONEY.toString(), this._fontSize, this._fontFamily, this._fontColor, 850, 28, false);
            this._playerBetTXT = new objects.Label("$ " + config.Game.PLAYER_BET.toString(), this._fontSize, this._fontFamily, this._fontColor, 235, 593, false);
            this._playerWinTXT = new objects.Label("$ " + config.Game.WINNINGS.toString(), this._fontSize, this._fontFamily, this._fontColor, 435, 593, false);
            this._symbols = new Array();
            // Create the slots by specified number
            this._noOfSlots = slotNo;
            this._slots = new Array();
            this.Start();
        }
        // PRIVATE METHODS
        _showPlayerStats() {
            config.Game.WIN_RATIO = config.Game.WIN_NUMBER / config.Game.TURN;
            this._turnTXT.text = config.Game.TURN.toString();
            this._lossTXT.text = config.Game.LOSS_NUMBER.toString();
            this._winTXT.text = config.Game.WIN_NUMBER.toString();
            this._winRateTXT.text = "% " + config.Game.WIN_RATIO.toPrecision(2).toString();
            this._jackPotTXT.text = "$ " + config.Game.JACKPOT.toString();
            this._playerMoneyTXT.text = "$ " + config.Game.PLAYER_MONEY.toString();
            this._playerBetTXT.text = "$ " + config.Game.PLAYER_BET.toString();
            this._playerWinTXT.text = "$ " + config.Game.WINNINGS.toString();
        }
        // Reset results
        _resetFruitTally() {
            config.Game.GRAPES = 0;
            config.Game.PLUMS = 0;
            config.Game.ORANGES = 0;
            config.Game.CHERRIES = 0;
            config.Game.BARS = 0;
            config.Game.BELLS = 0;
            config.Game.SEVENS = 0;
            config.Game.BLANKS = 0;
        }
        // Reset the player stats
        _resetAll() {
            config.Game.PLAYER_MONEY = 1000;
            config.Game.WINNINGS = 0;
            config.Game.JACKPOT = 5000;
            config.Game.TURN = 0;
            config.Game.PLAYER_BET = 0;
            config.Game.WIN_NUMBER = 0;
            config.Game.LOSS_NUMBER = 0;
            config.Game.WIN_RATIO = 0;
        }
        _spinClick() {
            if (config.Game.PLAYER_MONEY == 0) {
                if (confirm("You ran out of Money! \nDo you want to play again?")) {
                    this._resetAll();
                    this._showPlayerStats();
                }
            }
            else if (config.Game.PLAYER_BET > config.Game.PLAYER_MONEY) {
                alert("You don't have enough Money to place that bet.");
            }
            else if (config.Game.PLAYER_BET < 0) {
                alert("All bets must be a positive $ amount.");
            }
            else if (config.Game.PLAYER_BET <= config.Game.PLAYER_MONEY) {
                this._slots.forEach((slot) => {
                    slot.Spin();
                });
                config.Game.TURN++;
                this._determineWinning();
                this._showPlayerStats();
            }
            else {
                alert("Please enter a valid bet amount");
            }
        }
        _determineWinning() {
            let wins = 0;
            if (config.Game.BLANKS == 0) {
                if (config.Game.GRAPES == 3) {
                    wins = config.Game.PLAYER_BET * 10;
                }
                else if (config.Game.PLUMS == 3) {
                    wins = config.Game.PLAYER_BET * 20;
                }
                else if (config.Game.ORANGES == 3) {
                    wins = config.Game.PLAYER_BET * 30;
                }
                else if (config.Game.CHERRIES == 3) {
                    wins = config.Game.PLAYER_BET * 40;
                }
                else if (config.Game.BARS == 3) {
                    wins = config.Game.PLAYER_BET * 50;
                }
                else if (config.Game.BELLS == 3) {
                    wins = config.Game.PLAYER_BET * 75;
                }
                else if (config.Game.SEVENS == 3) {
                    wins = config.Game.PLAYER_BET * 100;
                }
                else if (config.Game.GRAPES == 2) {
                    wins = config.Game.PLAYER_BET * 2;
                }
                else if (config.Game.PLUMS == 2) {
                    wins = config.Game.PLAYER_BET * 2;
                }
                else if (config.Game.ORANGES == 2) {
                    wins = config.Game.PLAYER_BET * 3;
                }
                else if (config.Game.CHERRIES == 2) {
                    wins = config.Game.PLAYER_BET * 4;
                }
                else if (config.Game.BARS == 2) {
                    wins = config.Game.PLAYER_BET * 5;
                }
                else if (config.Game.BARS == 2) {
                    wins = config.Game.PLAYER_BET * 10;
                }
                else if (config.Game.SEVENS == 2) {
                    wins = config.Game.PLAYER_BET * 20;
                }
                else if (config.Game.SEVENS == 1) {
                    wins = config.Game.PLAYER_BET * 5;
                }
                else {
                    wins = config.Game.PLAYER_BET * 1;
                }
                if (wins > config.Game.PLAYER_BET) {
                    config.Game.WIN_NUMBER++;
                }
                config.Game.PLAYER_MONEY += wins;
                config.Game.WINNINGS = wins;
                this._resetFruitTally();
                this._checkJackPot();
            }
            else {
                config.Game.LOSS_NUMBER++;
                config.Game.PLAYER_MONEY -= config.Game.PLAYER_BET;
                this._checkJackPot();
                this._resetFruitTally();
            }
        }
        _checkJackPot() {
            var jackPotTry = Math.floor(Math.random() * 51 + 1);
            var jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (jackPotTry == jackPotWin || config.Game.PLAYER_BET === 110) {
                alert("You Won the $" + config.Game.JACKPOT + " Jackpot!!");
                config.Game.PLAYER_MONEY += config.Game.JACKPOT;
                config.Game.JACKPOT = 1000;
            }
        }
        // PUBLIC METHODS
        Start() {
            this._slotMachine = new objects.SlotMachine();
            this.Main();
        }
        Update() {
            this._slotMachine.Update();
            this._slots.forEach((slot) => {
                slot.Update();
                slot.Roller.Update();
            });
        }
        Main() {
            let that = this;
            //push symbols to the Gloabl object
            config.Game.SYMBOLS.push(new objects.Symbol("Seven", 291));
            config.Game.SYMBOLS.push(new objects.Symbol("Bell", 1250));
            config.Game.SYMBOLS.push(new objects.Symbol("Bar", 485));
            config.Game.SYMBOLS.push(new objects.Symbol("Cherry", 1067));
            config.Game.SYMBOLS.push(new objects.Symbol("Orange", 865));
            config.Game.SYMBOLS.push(new objects.Symbol("Plum", 679));
            config.Game.SYMBOLS.push(new objects.Symbol("Grape", -97));
            config.Game.SYMBOLS.push(new objects.Symbol("Blank", 97));
            //Placing slots in UI location
            var i = 1;
            var xloc = 196;
            while (i <= this._noOfSlots) {
                this._slots.push(new objects.Slot(this._symbols, xloc, 143));
                i++;
                xloc += 219;
            }
            // Adding Children
            this._slots.forEach((slot) => {
                that.addChild(slot);
            });
            this.addChild(this._slotMachine);
            this.addChild(this._spinButton);
            this.addChild(this._resetButton);
            this.addChild(this._addBetButton);
            this.addChild(this._deductBetButton);
            this.addChild(this._jackPotTXT);
            this.addChild(this._winTXT);
            this.addChild(this._lossTXT);
            this.addChild(this._turnTXT);
            this.addChild(this._winRateTXT);
            this.addChild(this._playerBetTXT);
            this.addChild(this._playerMoneyTXT);
            this.addChild(this._playerWinTXT);
            // Event listeners
            this._spinButton.on("click", function () {
                if (config.Game.PLAYER_BET > 0) {
                    config.Game.WINNINGS = 0;
                    that._spinClick();
                }
            });
            this._addBetButton.on("click", function () {
                if (config.Game.PLAYER_MONEY > config.Game.PLAYER_BET + 10) {
                    config.Game.PLAYER_BET += 10;
                    that._showPlayerStats();
                }
            });
            this._deductBetButton.on("click", function () {
                if (config.Game.PLAYER_BET >= 10) {
                    config.Game.PLAYER_BET -= 10;
                    that._showPlayerStats();
                }
            });
            this._resetButton.on("click", function () {
                that._resetAll();
                that._showPlayerStats();
                that._slots.forEach((slot) => {
                    slot.Roller.ShowResult(config.Game.SYMBOLS[0].VerticalPosition);
                });
            });
        }
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map
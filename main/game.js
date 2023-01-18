class Game {
    constructor(difficulty, enemy) {
        this.player = window.player;
        this.enemy = enemy;
        this.enemyHP = this.enemy.maxHP;
        this.difficulty = difficulty;
        this.playerHP = this.player.maxHP;
        this.wordReqs = null;
        this.timerFunction = null;
        this.currentTimer = null;
        this.enemiesKilled = 0; // Builds in base variables needed for storing information about the game for further use.
    }
    init() {
        window.gui.toggleWindow('fight-display')
        this.roundStart();
    } // Toggles screen from start screen to game screen, as well as starting the actual game loop.
    roundStart() {
        this.roundLoop()
        game.timerFunction = setInterval(game.timerTick, 1000); //Sets the game loop.
    }
    roundLoop() {
        game.currentTimer = 10;
        this.determineWordReqs()
        this.checkGameState() //Resets timer back to 10 and generates new requirements for user.
    }
    timerTick() {
        game.currentTimer -= 1;
        if (game.currentTimer === 0) {
            game.enemyAttack();
            game.roundLoop();
        }
        game.checkGameState()
    } //Ticks the timer, checks if timer reaches 0. If timer reaches 0, the enemy will attack and the round will reset.
    playerAttack() {
        if (game.mobHP - game.player.baseDamage <= 0) {
            game.mobHP = 0
        } else {
            game.mobHP -= game.player.baseDamage
        }
        this.checkGameState()
    } // Method that makes mob's HP decrease by the player's base attack.
    enemyAttack() {
        if (game.playerHP - game.enemy.baseDamage <= 0) {
            game.enemyHP = 0
        } else {
            game.enemyHP -= game.player.baseDamage
        }
        this.checkGameState()
    } // Like player attack but for when the enemy attacks.
    checkGameState() {
        if (playerHP === 0) {
            this.gameOver()
        }
        this.updateInterface()
    } //Checks if game has been decided, such as if player dies or player kills mob.
    determineWordReqs() {
        this.wordReqs = "TT"
    }
    gameOver() {}
    gameWon() {}
    updateInterface() {
        let requirementsLabel = document.getElementById("requirements-label")
        let timerLabel = document.getElementById("timer-label")
        let playerHealthLabel = document.getElementById("player-health-label")
        let enemyHealthLabel = document.getElementById("enemey-health-label")
        let enemiesKilledLabel = document.getElementById("total-kills-label")
        requirementsLabel.innerHTML = this.wordReqs;
        timerLabel.innerHTML = this.currentTimer;
        playerHealthLabel.innerHTML = this.playerHP;
        enemyHealthLabel.innerHTML = this.enemyHP;
        enemiesKilledLabel.innerHTML = this.enemiesKilled;
    }
}

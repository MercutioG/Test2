class Game {
    constructor(difficulty, enemy) {
        this.player = window.player;
        this.enemy = enemy;
        this.enemyHP = this.enemy.maxHP;
        this.difficulty = difficulty;
        this.playerHP = this.player.maxHP;
        this.timerFunction = null;
        this.currentTimer = null;
        this.wordRequirements = null;
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
    checkInput(input) {
        if (input.toUpperCase().includes(this.wordRequirements)) {
            console.log('Success')
            this.playerSuccess()
        } else {
            this.enemyAttack()
            this.roundLoop()
        }
    }
    playerSuccess() {
        this.playerAttack()
        this.roundLoop()
    }
    playerAttack() {
        if (game.enemyHP - game.player.baseDamage <= 0) {
            game.enemyHP = 0
            game.reloadEnemy()
        } else {
            game.enemyHP -= game.player.baseDamage
        }
        console.log(game.enemyHP)
        this.checkGameState()
    } // Method that makes mob's HP decrease by the player's base attack.
    enemyAttack() {
        if (game.playerHP - game.enemy.baseDamage <= 0) {
            game.playerHP = 0
        } else {
            game.playerHP -= game.enemy.baseDamage
        }
        this.checkGameState()
    } // Like player attack but for when the enemy attacks.
    checkGameState() {
        if (this.playerHP === 0) {
            this.gameOver();
        } else if (this.enemyHP === 0) {
            this.gameWon();
        } 
        this.updateInterface()
    } //Checks if game has been decided, such as if player dies or player kills mob.
    determineWordReqs() {
        let randomLetters = () => {
            const randomWordDatabase = [
                'WHITEBAG',
                'ANTIDISESTABLISHMENTARIANISM',
                'FROGGO',
                'ANDREW',
                'BRENARD',
                'TERRARIA',
                'TESTISTIFICATE',
                'UNICORN',
                'AGRARIAN',
                'UNITED',
                'PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS',
                'CHUGNIS',
                'THE',
                'GREATEST',
                'GAME',
                'OF',
                'ALL',
                'TIME',
                'APPLE',
                'NORTH',
                'BLANKETS',
                'SUPERCALIFRAGILISTICEXPIALIDOCIOUS',
                'ARIZONA',
                'PEAR',
                'ORANGE',
                'FLIGHT',
                'RAN',
                'PIZZA',
                'GAME',
                'ABSTRACT',
                'PIE',
                'SUPER'
            ]
            let determineWord = () => {return randomWordDatabase[Math.floor(Math.random() * randomWordDatabase.length)].split('')}
            let wordArray = determineWord()
            let randomIndex = Math.floor(Math.random() * (wordArray.length - 1))
            return wordArray[randomIndex] + wordArray[randomIndex + 1]
        }
        game.wordRequirements = randomLetters();
        this.updateInterface()
    }
    gameOver() {
        clearInterval(game.timerFunction)
        location.reload()
    }
    gameWon() {} // Methods that will be further used to spice up the game.
    updateInterface() {
        let requirementsLabel = document.getElementById("requirements-label")
        let timerLabel = document.getElementById("timer-label")
        let playerHealthLabel = document.getElementById("player-health-label")
        let enemyHealthLabel = document.getElementById("enemey-health-label")
        let enemiesKilledLabel = document.getElementById("total-kills-label")
        requirementsLabel.innerHTML = this.wordRequirements;
        timerLabel.innerHTML = this.currentTimer;
        playerHealthLabel.innerHTML = this.playerHP;
        enemyHealthLabel.innerHTML = this.enemyHP;
        enemiesKilledLabel.innerHTML = this.enemiesKilled;
    } //Method that updates the interface for the user, called whenever there's a change in variables, such as timer tick, damage, or more.
    reloadEnemy() { //STARTED WORKING ON RESETTING ENEMIES, PLEASE FINISH (self-reminder)
        this.enemiesKilled++
        this.enemyHP = 100
        this.playerHP += 8
        this.enemy
    }
}

class Game {
    constructor(difficulty, enemy) {
        this.mob = enemy;
        this.difficulty = difficulty;
        this.playerHP = player.maxHP;
    }
    init() {
        window.gui.toggleWindow('fight-display')
    }
}

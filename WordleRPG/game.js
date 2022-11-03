let player = {
    maxHP: 100,
    damage: 5,
    attackSpeed: 1000
}
let testDummy = {
    imgID: './assets/testDummy.png',
    maxHP: 100,
    damage: 5,
    attackSpeed: 1000
}

class Fight {
    constructor () {
        console.log('test')
        this.pic = null;
        this.cnv = null;
        this.ctx = null;
        this.gameOn = false;
        this.enemy = null;
        this.tempEnemyHP = null;
        this.tempPlayerHP = null;
        this.player = player;
    }
    init(enemyid) {
        this.gameOn = true;
        this.pic = document.getElementById('uni')
        this.cnv = document.getElementById('gameScreen');
        this.ctx = this.cnv.getContext('2d');
        this.tempPlayerHP = player.maxHP;
        this.enemy = enemyid;
        this.tempEnemyHP = this.enemy.maxHP;
        this.pic.src = this.enemy.imgID;
        this.refreshCanvas();

    }
    refreshCanvas() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0,0, this.cnv.width, this.cnv.height);
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.moveTo(0, 300);
        this.ctx.lineTo(800, 300);
        this.ctx.stroke();
        this.ctx.drawImage(this.pic, 300, 75, 200, 150);
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = 'red';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(String(this.tempEnemyHP), 400, 265);
        this.ctx.fillStyle = 'gray';
        this.ctx.fillRect(325, 313, 150, 13)
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(325, 313, (this.tempPlayerHP / player.maxHP) * 150, 13);
    }
    drawBorder() {
        this.ctx.strokeStyle = 'gray'
        this.ctx.strokeRect(300, 75, 200, 150);
    }
    resetBorder() {
        this.ctx.drawImage(this.pic, 300, 75, 200, 150);
    }
    hoverEnemy() {
        this.drawBorder()
        this.hoverOverEnemy = true;
    }
    startFight() {
        console.log('Fight started')
        let playerAttackTimer = setInterval(this.playerAttack, player.attackSpeed);
        let enemyAttackTimer = setInterval(this.enemyAttack, this.enemy.attackSpeed)
    }
    playerAttack() {
        if ((window.fight.tempEnemyHP - window.fight.player.damage) > 0) {
            window.fight.tempEnemyHP -= window.fight.player.damage
        }
        else {
            window.fight.tempEnemyHP = 0
            console.log('Enemy slain!')
        }
        window.fight.refreshCanvas()
    }
    enemyAttack() {
        if ((window.fight.tempPlayerHP - window.fight.enemy.damage) > 0) {
            window.fight.player.tempPlayerHP - window.fight.enemy.damage
        }
        else {
            window.fight.tempPlayerHP = 0
            console.log('Player killed!')
        }
        window.fight.refreshCanvas()
    }
}
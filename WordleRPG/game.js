class Fight {
    constructor () {
        console.log('test')
        this.pic = null;
        this.cnv = null;
        this.ctx = null;
    }
    init(enemyid) {
        this.pic = document.getElementById('uni')
        this.cnv = document.getElementById('gameScreen');
        this.ctx = this.cnv.getContext('2d');
        this.enemy = enemyid
        this.tempPlayerHP = player.maxHP
        this.tempEnemyHP = this.enemy.maxHP
        this.pic.src = this.enemy.imgID
        this.refreshCanvas()
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
        this.ctx.fillRect(325, 313, this.tempPlayerHP / player.maxHP * 150, 13)
    }
    gameRender() {
        
    }
}
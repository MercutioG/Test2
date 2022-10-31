class Fight {

    constructor () {
        this.cnv = null;
        this.ctx = null;
    }
    init(enemyid) {
        this.cnv = document.getElementById('gameScreen');
        this.ctx = this.cnv.getContext('2d');
        this.enemy = enemyid
        this.playerHP = player.maxHP
        this.enemyHP = this.enemy.maxHP
        this.loadCanvas()
    }
    clearCanvas() {
        ctx.fillStyle = "black";
        ctx.fillRect(0,0, canvas.width, canvas.height);
    }
    loadCanvas() {
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.moveTo(0, 300);
        this.ctx.lineTo(800, 300);
        this.ctx.stroke();
        this.ctx.drawImage(document.getElementById(this.enemy.imgID), 300, 75, 200, 150);
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = 'red';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(String(this.enemyHP), 400, 265);
    }
    gameRender() {
        
    }
}
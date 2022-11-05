class Gui {
    constructor() {
        this.cnv = null;
        this.resources = null;
        this.resourcesToLoad = 0;
    }
    prepareCanvas() {
        this.cnv = document.getElementById('gameScreen');
    }
    toggleScreen(id, toggle) {
        let element = document.getElementById(id);
        let display = ( toggle ) ? 'flex' : 'none';
        element.style.display = display;
    }
    closeAllScreens() {
        let elements = document.querySelectorAll('.screen');
        [...elements].forEach( e => {
            e.style.display = 'none';
        })
    }
    showScreen(id) {
        this.closeAllScreens();
        this.toggleScreen(id,true);
    }
    launchIfReady() {
        this.resourcesToLoad--;
        if( this.resourcesToLoad == 0) {
            this.prepareCanvas();
            this.showScreen('startScreen');
        }
    }
    beginLoadingImage(imgVar, fileName) {
        imgVar.onload = () => this.launchIfReady();
        imgVar.src = fileName;
    }
    beginLoadingAudio(audioVar, fileName) {
        audioVar.src = fileName;
        audioVar.addEventListener('canplay', () => this.launchIfReady())
    }
    load(resources) {
        if (!resources || resources.length == 0) {
            this.prepareCanvas();
            this.showScreen('startScreen');
            return;
        }
        if (resources) {
            this.resources = resources;
            this.resourcesToLoad = this.resources.length;
            for (let i = 0; i < this.resources.length; i++) {
                if ( this.resources[i].var != undefined) {
                    if (this.resources[i].var.nodeName == 'IMG') {
                        this.beginLoadingImage(
                            this.resources[i].var,
                            this.resources[i].file);
                    }
                }
            }
        }
    }
    getResource(id) {
        return this.resources.filter(r => r.id === id)[0].var;
    }
    getResources(id) {
        return this.resources;
    }
    startFight(enemyid) {
        this.showScreen(this.cnv.id)
        this.prepareCanvas();
        window.fight.init(enemyid);
        mouseDetector();
    }
}

function mouseDetector() {
    window.gui.cnv.addEventListener('mousemove', function(e) {
        if (window.fight.gameOn = true) {
            let target = e.target;
            let rect = target.getBoundingClientRect();
            let x = Math.round(e.clientX - rect.left);
            let y = Math.round(e.clientY - rect.top);
            if ( (x >= 300 && x <= 500 ) && (y >= 75 && y <= 225) ) {
                window.fight.drawBorder(true, 325, 75, 150, 150);
            }
            else {
                window.fight.drawBorder(false, 325, 75, 150, 150);
            }
        }
        else {
            cnv.removeEventListener('mousemove', this, false);
        }
    })
    window.gui.cnv.addEventListener('click', function(e) {
        if (window.fight.gameOn == true) {
            if (window.fight.hoverOverEnemy == true) {
                window.fight.startFight();
            }
        }
    })
}

// This prints out as undefined
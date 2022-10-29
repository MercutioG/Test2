class Gui {
    toggleScreen(id, toggle) {
        let element = document.getElementById(id);
        let display = ( toggle ) ? 'block' : 'none';
        element.style.display = display;
    }
    closeAllScreens() {
        let elements = document.querySelectorAll('.screen');
        [...elements].forEach( e=> {
            e.style.display = "none"
        });
    }
    showScreen(id) {
        this.closeAllScreens();
        this.toggleScreen(id, true);
    }
    startFight(id) {
        this.closeAllScreens();
        this.toggleScreen(id, true)
    }
}
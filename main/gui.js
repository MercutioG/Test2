class Gui {
    openWindow(window) {
        document.getElementById(window).style = 'display: block';
    }
    closeWindows() {
        document.getElementsByClassName('window').foreach(i => {i.style = 'display: none;'});
    }
    toggleWindow(window) {
        this.closeWindows();
        this.openWindow(window);
    }
    startGame() {
        window.game = new Game(2, window.mobs.mob1);
        window.game.init()
    }
}
window.gui = new Gui();
window.fight = new Fight();

window.onload = function() {
    console.log('loading...');
    window.gui.load([
        { id: 'dummy-img', var: dummyImg = document.createElement('img'), file: 'assets/testDummy.png' }
    ]);
}


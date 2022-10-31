let fight = new Fight();
window.gui = new Gui(fight);

window.onload = function() {
    console.log('loading...');
    window.gui.load([
        { id: 'dummy-img', var: dummyImg = document.createElement('img'), file: 'assets/testDummy.png' }
    ]);
}

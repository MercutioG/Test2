let word = wordDecider()
let playerInput = [null,null,null,null,null]
let correctLetters = [null,null,null,null,null]
let valid = false;

window.addEventListener('keydown', function(keyPressed) {
    if (keyPressed.code.includes('Key')) {
        let letter = keyPressed.code.replace('Key', '');
        if (playerInput.includes(null)) {
            playerInput[playerInput.indexOf(null)] = letter;
            console.log(playerInput);
        }
    }
    if (keyPressed.code === 'Enter' && !playerInput.includes(null)) {
        let playerWordString = playerInput.toString().replaceAll(',', '');
        checkIfInputIsValid(playerWordString)
        if (valid == true) {
            checkSuccess()
            resetInput()
            valid = false;
        }
    }
    if (keyPressed.code === 'Backspace') {
        if (playerInput.includes(null)) {
            playerInput[playerInput.indexOf(null) - 1] = null;
        } else {
            playerInput[4] = null; 
        }
        console.log(playerInput);
    }
    updateText()
})

function updateText() {
    
}

function checkSuccess() {
    for (let i = 0; i < 5; i++) {
        for (let a = 0; a < 5; a++) {
            if (word[i] === playerInput[a]) {
                correctLetters[i] = playerInput[a];
            }
        }
    }
    console.log(correctLetters);
    if (!correctLetters.includes(null)) {
        console.log('Success!')
    }
}

function resetInput() {
    playerInput = [null,null,null,null,null];
}

function checkIfInputIsValid(x) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${x}`;
    let http = new XMLHttpRequest();
    http.open('HEAD', url, true);
    http.send();
    if (http.status != 404) {
        valid = true;
    } else {
        valid = false;
    }
}

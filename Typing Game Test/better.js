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
        console.log(valid)
        if (valid === true) {
            checkSuccess()
            resetInput()
            updateCorrectLetters()
            valid = false;
        } else {
        }
    }
    if (keyPressed.code === 'Backspace' && !playerInput.every(x => x === null)) {
        if (playerInput.includes(null)) {
            playerInput[playerInput.indexOf(null) - 1] = null;
        } else {
            playerInput[4] = null; 
        }
        console.log(playerInput);
    }
    updatePlayerInput();
})

function updateCorrectLetters() {
    let letterDisplay = document.getElementsByClassName('letters')
    for (let i = 0; i < letterDisplay.length; i++) {
        if (!(correctLetters[i] == null)) {
            letterDisplay[i].innerHTML = correctLetters[i];
            letterDisplay[i].style.color = 'green'
        }
    }
}

function updatePlayerInput() {
    let letterDisplay = document.getElementsByClassName('input');
    for (let i = 0; i < playerInput.length; i++) {
        if (!(playerInput[i] == null)) {
            letterDisplay[i].innerHTML = playerInput[i];
        } else {
            letterDisplay[i].innerHTML = '_'
        }
    }
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
        alert('Game won!')
    }
}

function resetInput() {
    playerInput = [null,null,null,null,null];
}

async function checkIfInputIsValid(x) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${x}`;
    let http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    console.log(http.status)
    if (http.status != 404) {
        valid = true;
    } else {
        valid = false;
    }
}

// let checkIfInputIsValid = (x) = async function {
//     let url = await `https://api.dictionaryapi.dev/api/v2/entries/en/${x}`;
//     let http = new XMLHttpRequest();
// }
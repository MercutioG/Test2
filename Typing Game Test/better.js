let word = wordDecider()
console.log(word)
let playerInput = [null,null,null,null,null]

window.addEventListener('keydown', function(keyPressed) {
    if (keyPressed.code.includes('Key')) {
        let letter = keyPressed.code.replace('Key', '');
        if (playerInput.includes(null)) {
            playerInput[playerInput.indexOf(null)] = letter;
            console.log(playerInput)
        }
    }
    if (keyPressed.code === 'Enter' && !playerInput.includes(null)) {
        let normalWord = JSON.stringify(playerInput)
        loadJSON('https://api.dictionaryapi.dev/api/v2/entries/en/')
        checkPlayerInput()
    }
})

function checkPlayerInput() {
    let correctLetters = [null,null,null,null,null];

    for (let i = 0; i < 5; i++) {
        for (let a = 0; a < 5; a++) {
            if (word[i] === playerInput[a]) {
                correctLetters[i] = playerInput[a]
            }
        }
    }
    console.log(correctLetters)
}
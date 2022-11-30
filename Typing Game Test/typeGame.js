const userInputBox = document.getElementById('user-input')
const reqLabel = document.getElementById('requirement-spam')
let points = 0; let lives = 5; let rounds = 0; let wordRequirements

function checkInput(input) {
    if(checkIfWordMeetsReqs(input) && checkIfWordExists(input)) {
        console.log('Game won!')
        points += input.length
    } else {lives--}
    newRound()
}

function newRound() {
    determineReqs()
    rounds++
    document.getElementById('points-spam').innerHTML = points;
    document.getElementById('rounds-spam').innerHTML = rounds;
    document.getElementById('lives-spam').innerHTML = lives;
    userInputBox.value = ''
    reqLabel.innerHTML = wordRequirements.toLowerCase()
}

let checkIfWordExists = (x) => {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${x}`;
    let http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status != 404) {
        return true
    } else {
        return false
    }
}

let checkIfWordMeetsReqs = (x) => { if (x.includes(wordRequirements)) {return true} else {return false} }

function determineReqs() {
    let randomLetters = () => {
        const randomWordDatabase = [
            'WHITEBAG',
            'DISESTABLISHMENTARIANISM',
            'FROGGO',
            'ANDREW',
            'BRENARD',
            'TERRARIA',
            'TESTISTIFICATE',
            'UNICORN',
            'AGRARIAN',
            'UNITED',
            'PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS',
            'CHUGNIS',
            'THE',
            'GREATEST',
            'GAME',
            'OF',
            'ALL',
            'TIME',
            'APPLE',
            'NORTH',
            'KOREA',
            'SUPERCALIFRAGILISTICEXPIALIDOCIOUS',
            'ARIZONA'
        ]
        let determineWord = () => {return randomWordDatabase[Math.floor(Math.random() * randomWordDatabase.length)].split('')}
        let wordArray = determineWord()
        let randomIndex = Math.floor(Math.random() * (wordArray.length - 1))
        return wordArray[randomIndex] + wordArray[randomIndex + 1]
    }
    wordRequirements = randomLetters();
}

newRound()
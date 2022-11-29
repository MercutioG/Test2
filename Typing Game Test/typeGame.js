const userInputBox = document.getElementById('user-input')
const reqLabel = document.getElementById('requirement-spam')
const randomWordDatabase = [
    'WHITEBAG',
    'DISESTABLISHMENTARIANISM',
    'FROGGO',
    'ANDREW',
    'BRENARD',
    'TERRARIA',
    'TESTISTIFICATE',
    'UNICORN',
    'AGUARIAN',
    'AGRARIAN',
    'UNITED',
    'PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS',
    'CHUGNIS'
]

function checkInput(input) {
    if(checkIfWordExists(input)) {

    }
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

let checkIfMeetsReqs = (x) => {

}

let randomLetters = (x) => {
    let determineWord = () => {return randomWordDatabase[Math.floor(Math.random() * randomWordDatabase.length)].split('')}
    let wordArray = determineWord()
    return wordArray[Math.floor(Math.random() * (wordArray.length - 1))]
}
console.log(randomLetters())


    const userInputBox = document.getElementById('user-input');
    const reqLabel = document.getElementById('requirement-spam');
    let points = 0; let bossHP = 100; let rounds = 0; let wordRequirements; let playerHP = 100; let timer = 10;

    function checkInput(input) {
        if(checkIfWordMeetsReqs(input) && checkIfWordExists(input)) { 
            points += Math.round(input.length**1.5 + 3);
            bossHP -= points;
        } else {playerHP -= 3};
        newRound();
    }

    function newRound() {
        determineReqs();
        timer = 10;
        callTimer();
        rounds++;
        document.getElementById('points-spam').innerHTML = points;
        document.getElementById('rounds-spam').innerHTML = rounds;
        document.getElementById('lives-spam').innerHTML = bossHP;
        document.getElementById('health-spam').innerHTML = playerHP;
        userInputBox.value = '';
        reqLabel.innerHTML = wordRequirements.toLowerCase();
    }

    let checkIfWordExists = (x) => {
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${x}`;
        let http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        if (http.status != 404) {
            return true;
        } else {
            return false;
        }
    }

    let checkIfWordMeetsReqs = (x) => { if (x.includes(wordRequirements)) {return true} else {return false} };

    function determineReqs() {
        let randomLetters = () => {
            const randomWordDatabase = [
                'WHITEBAG',
                'ANTIDISESTABLISHMENTARIANISM',
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
                'BLANKETS',
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
    function callTimer() {
        downloadTimer = setInterval(function(){
            if(timer <= 0){
            clearInterval(downloadTimer);
            playerHP -= 3;
            newRound()
            } else {
            timer -= 1;
            }
            document.getElementById("timer").innerHTML = timer;
        }, 1000);
    }
    newRound()
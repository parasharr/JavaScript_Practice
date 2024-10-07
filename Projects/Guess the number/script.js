let randomNumber = parseInt(Math.random() * 100 +1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
// validation the number if it is a number or not.
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }else if(guess < 1){
        alert("Please enter a number more than 1");
    }else if(guess > 100){
        alert("Please enter a number under 100 ")
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. The number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
//checking the value if it is correct or wrong
    if(guess === randomNumber){
        displayMessage(`Congrates! You guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is Too LOW!`)
    }else if(guess > randomNumber){
        displayMessage(`Number is Too HIGH!`)
    }
}

function displayGuess(guess){
//clean the values for the next round
    userInput.value = '';//updating by empty string
    guessSlot.innerHTML += `${guess}, `;
    numGuess ++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
//will pass the message
    lowOrHi.innerHTML = `<h4>${message}</h4>`;
}

function endGame(){
    //ending of game
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h3 id="newGame">Start New Game</h3>`;
    p.style.backgroundColor = "red"
    p.style.cursor = "pointer"
    
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
//new game
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 +1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}


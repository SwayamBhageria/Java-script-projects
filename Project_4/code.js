let randomNum = parseInt(Math.random() * 100 + 1);

const Input = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const prevguess = document.querySelector('.guesses')
const guessRem = document.querySelector('.lastResult')
const lowHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let numGuess = 1;
const p = document.createElement('p');


let playgame = true;

if(playgame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(Input.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess<1 || guess> 100){
        alert('Please enter a valid number');
    }else{
        if(numGuess === 11){
         displayMessage(`Game Over. Random number was ${randomNum}`);
         endGame();
        }else{
          displayGuess(guess);
          checkGuess(guess);
        }
    }
}


function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < randomNum){
        displayMessage(`guess is low`)
    }else if(guess > randomNum){
        displayMessage(`guess is high`)
    }
}


function displayGuess(guess){
   Input.value = '';
   prevguess.innerHTML += `${guess} , `;
   numGuess++;
   guessRem.innerHTML = `${11 - numGuess} `;
}

function endGame(){
    Input.value = '';
    Input.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playgame = false;
    newGame();
}

function newGame(){
    const newgameButton = document.querySelector('#newGame');
    newgameButton.addEventListener('click', function(e){
      randomNum = parseInt(Math.random() * 100 + 1);
      numGuess = 1;
      guessRem.innerHTML = `${11 - numGuess} `;
      prevguess.innerHTML ='';
      Input.removeAttribute('disabled');
      startOver.removeChild(p);

      playgame = true;

    })
}

function displayMessage(msg){
    lowHi.innerHTML = `<h2>${msg}</h2>`;
}


console.log("Script loaded");
document.addEventListener('DOMContentLoaded', () => {
    let random = parseInt((Math.random() * 100) + 1);
    console.log(random);
    const form = document.querySelector('form');
    const prevGuess = document.getElementById('prevGuess');
    const remGuess = document.getElementById('remGuess');
    const result = document.getElementById('result');
    const userInput = document.getElementById('guess');
    const newGame = document.getElementById('newGame');

    let preGuess = [];
    let attempt = 1;
    let playGame = true;

    let b = document.createElement("button");

    if(playGame){
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            const guess = parseInt(userInput.value);
            validate(guess);
        })
    }
    function validate(guess){
        if (guess == '') {
            result.innerHTML = "Input any Number";
        } else if (guess < 0) {
            result.innerHTML = "Input number greater than 0";
        } else if (isNaN(guess)) {
            result.innerHTML = "Given input is not a number";
        }else{
            preGuess.push(guess);
            if(attempt === 10){
                displayGuess(guess);
                displayMessage(`Game Over. Random number was ${random}`)
                endGame();
            }else{
                displayGuess(guess);
                check(guess);
            }
        }
    }
    function check(guess){
        if (guess == random) {
            displayMessage(`You guessed the right number ${random}`);
            endGame()
        } else if (guess < random) {
            displayMessage(`Try guessing number larger than inputted number`);
        } else {
            displayMessage(`Try guessing number lesser than inputted number`);
        }
    }
    function displayGuess(guess){
        userInput.value = '';
        prevGuess.innerHTML += `[${guess}] `;
        attempt++;
        remGuess.innerHTML = `${11-attempt}`;
    }
    function displayMessage(message){
        result.innerHTML = `${message}`;
    }
    function endGame(){
        userInput.value = '';
        userInput.setAttribute('disables', ''); 
        b.innerHTML = "New Game";
        playGame = false;
        b.id = "newGame";
        newGame.appendChild(b);
        startGame();

    }
    function startGame(){
        const newGameButton = document.querySelector('#newGame')
        newGameButton.addEventListener('click',(e) => {
            random = parseInt((Math.random() * 100) + 1);
            console.log(random);
            attempt = 1;
            preGuess = []; 
            playGame = true;
            prevGuess.innerHTML = '';
            remGuess.innerHTML = `${11-attempt}`;
            result.innerHTML ='';
            playGame = true;
            userInput.removeAttribute('disabled');
            newGame.removeChild(b);
        })
        
    }
  
});

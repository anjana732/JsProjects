console.log("Script loaded");
document.addEventListener('DOMContentLoaded', () => {
const random = parseInt((Math.random()*100) + 1);
console.log(random);
const form = document.querySelector('form');
const prevGuess = document.getElementById('prevGuess');
const remGuess = document.getElementById('remGuess');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const guess = parseInt(document.getElementById('guess').value);
    if(guess == ''){
        console.log("null value");
    }else if(guess < 0 ){
        console.log("number less than 0");
    }else if(isNaN(guess)){
        console.log("given input is not a number");
    }

});
});

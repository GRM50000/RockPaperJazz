//rock paper scissors
//the player picks r,p,s
// -- outcomes --

//rock destroys scissors 
//scissors cuts paper 
//paper covers rock 

// --actions--
//collect user choice 
//computer makes choice / parse computer's choice
//determine the winner.

let userChoice = window.prompt('Choose Rock, Paper, or Scissors');
userChoice = userChoice.toLowerCase();
console.log(userChoice);

if (!(userChoice == 'rock' || userChoice == 'paper' || userChoice == 'scissors')) {
    alert('Only Choose R P S, Try Again');
    window.location = 'ex3.html';
}

//computer's choice
let computerChoice = Math.random();
if (computerChoice <= 0.333) {
    computerChoice = 'rock';
} else if (computerChoice <= .666) {
    computerChoice = 'paper'
} else {
    computerChoice = 'scisscors';
}
console.log(computerChoice);



//result within play again BUTTON
if (userChoice == computerChoice) {
    alert('TIE! Try again');
    //result within play again BUTTON

    
    
} else if (userChoice == 'rock') {
    if (computerChoice == 'scissors') {
        alert('The computer got scissors so you WIN!');
    } else {
        alert('The computer got paper, you Lose.');
    }
} else if (userChoice == 'paper') {
    if (computerChoice == 'rock') {
        alert('the computer picked rock, so you WIN!');
    } else {
        alert('The computer picked scissors, you Lose.');
    }
} else if (userChoice == 'scissors') {
    if (computerChoice == 'paper') {
        alert('The computer picked paper, so you WIN!')
    } else {
        alert('The computer picked rock; you Lose.');
    }
}

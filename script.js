// all available options for the game
const options = ['rock', 'paper', 'scissors']
        
// use random number (0-2) to return one of the valid options
function computerPlay() {
    return options[Math.round(Math.random()*2)]
}

// return true if player 1's choice beats player 2's, false if p2 wins, and "draw" if neither.
function playRound(p1, p2) {
    if (p1 === p2) {
        return "draw"
    } else if (p1 === 'rock' && p2 == 'paper') {
        return false
    } else if (p1 === 'paper' && p2 === 'scissors') {
        return false
    } else if (p1 === 'scissors' && p2 === 'rock') {
        return false
    }  else {
        return true
    }
}

// play a 5 round game of rock paper scissors, declare winner each round and final winner in console
function game() {
    // declare space for guess, scores and result to go
    let guess;
    let playerScore = 0;
    let computerScore = 0;
    let result;

    // initiate loop to go 5 times for 5 rounds
    for (let i = 0; i < 5; i++) {
        // take player input
        guess = prompt("Rock, paper, or scissors?").toLowerCase()
        // play round against computer
        result = playRound(guess, computerPlay())
        // log winner of round in console and in win counter
        if (result === "draw") {
            console.log("It's a draw!")
        } else if (result === true) {
            console.log("You win this round!")
            playerScore += 1
        } else if (result === false) {
            console.log("You lose this round!")
            computerScore += 1
        }
    }
    
    // after 5 rounds, check to see who won
    if (computerScore > playerScore) {
        console.log("You lose the game.")
    } else if (playerScore > computerScore) {
        console.log("You won the game!")
    } else if (playerScore === computerScore) {
        console.log("It was a draw.")
    }
}

// start game on button press
const startButton = document.querySelector('#start');
startButton.addEventListener('click', function() { game() }, false);
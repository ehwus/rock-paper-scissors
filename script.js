// CONSTANTS

const options = ['rock', 'paper', 'scissors']
const scoreDiv = document.querySelector(".score");
const gameSpace = document.querySelector(".buttons");
const buttons = document.querySelectorAll('.btn');
const header = document.querySelector(".main-header h1");

// VARIABLES

let guess;
let playerScore = 0;
let computerScore = 0;
let result;
let round = 1;
let winner;
let finalWinner;

// FUNCTIONS

// use random number (0-2) to return one of the valid options
function computerPlay() {
    return options[Math.round(Math.random() * 2)]
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
    } else {
        return true
    }
}

// update scoreDiv with current values and header with round number
function updateScoreAndRounds() {
    scoreDiv.textContent = `You: ${playerScore} Computer: ${computerScore}`;
    header.textContent = `${winner} wins round ${round - 1}! Round ${round}`;
}

// returns 'Player' or 'Computer' if winner, false if no winner yet
// a winner is a player with 5 points or more
function checkForWinner() {
    return (playerScore >= 5 || computerScore >= 5)
}

// declare the winner
function declareWinner() {
    if (computerScore > playerScore) {
        finalWinner = 'Computer';
    } else {
        finalWinner = 'Player';
    }
    header.textContent = `${finalWinner} secures the ULTIMATE VICTORY!`;
}

// end of round - updateScoreAndRounds, then checkForWinner: if true declareWinner and reset
function endRound() {
    updateScoreAndRounds();
    if (checkForWinner()) {
        declareWinner();
        reset();
    }
}

// resets game
function reset() {
    // todo
}

// MAIN

// play round on click of button, update score
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        if (playRound(button.id, computerPlay())) {
            playerScore += 1;
            round += 1;
            winner = "Player";
            endRound()
        } else {
            computerScore += 1
            round += 1;
            winner = "Computer";
            endRound()
        }
    })
}
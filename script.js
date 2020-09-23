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
    header.textContent = `${winner} wins round ${round-1}! Round ${round}`;
}

// returns 'Player' or 'Computer' if winner, false if no winner yet
// a winner is a player with 5 points or more
function checkForWinner() {
    return (playerScore >= 5 || computerScore >= 5)
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
            updateScoreAndRounds();
        } else {
            computerScore += 1
            round += 1;
            winner = "Computer";
            updateScoreAndRounds();
        }
    })}

// check for winner
checkForWinner()

// // play a 5 round game of rock paper scissors, declare winner each round and final winner
// function game() {
//     header.textContent = "Round 1";

//     // declare variables for guess, scores and result to go
//     let guess;
//     let playerScore = 0;
//     let computerScore = 0;
//     let result;
//     // boolean to control flow of game
//     let keepGoing = true;

//     // initiate loop to go 5 times for 5 rounds
//     for (let i = 0; i < 5; i++) {
//         // show player score, updating each round
//         header.textContent = `Round ${i + 1}`;
//         scoreDiv.textContent = `You: ${playerScore} Computer: ${computerScore}`;

//         while (keepGoing) {
//             for (const button of buttons) {
//                 button.addEventListener('click', function (event) {
//                     playRound(button.id, computerPlay);
//                     keepGoing = false;
//                 })
//             }
//         }

//     }


//     // play round against computer if choice made
//     result = playRound(guess, computerPlay())
//     // log winner of round in console and in win counter
//     if (result === "draw") {
//         console.log("It's a draw!")
//     } else if (result === true) {
//         console.log("You win this round!")
//         playerScore += 1
//     } else if (result === false) {
//         console.log("You lose this round!")
//         computerScore += 1
//     }

//     // after 5 rounds, check to see who won
//     if (computerScore > playerScore) {
//         console.log("You lose the game.")
//     } else if (playerScore > computerScore) {
//         console.log("You won the game!")
//     } else if (playerScore === computerScore) {
//         console.log("It was a draw.")
//     }
// }

// // start game on button press
// window.addEventListener('keydown', function (e) {
//     if (e.code === 'KeyR') {
//         game();
//     } else {
//         return;
//     }
// })
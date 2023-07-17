const rockButton = document.getElementById("rock");
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
let scorePop = document.getElementById('score');

document.getElementById("rock").addEventListener('click', () => playGameRock());
document.getElementById("paper").addEventListener('click', () => playGamePaper());
document.getElementById("scissors").addEventListener('click', () => playGameScissors());


function playGameRock() {
    let computerSelection = getComputerChoice();
    console.log(playGame(computerSelection, "ROCK"));
}

function playGamePaper() {
    let computerSelection = getComputerChoice();
    console.log(playGame(computerSelection, "PAPER"));
}

function playGameScissors() {
    let computerSelection = getComputerChoice();
    playGame(computerSelection, "SCISSORS");
}

function playGame(computerSelection, playerSelection) {
    let gameWinner = 'NONE';
    if (playerSelection === computerSelection) {
        gameWinner = "NONE"
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        gameWinner = 'Player';
        updateScoreHuman();
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        gameWinner = 'Computer';
        updateScoreComputer();
    }

    updateScorePop(gameWinner, playerSelection, computerSelection);
} 

function getComputerChoice () { 
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "ROCK";
            break;
        case 1: 
            return "SCISSORS";
            break;
        case 2:
            return "PAPER";
            break;
        default:
            break;
    }
}



function updateScoreHuman() {
   let score = parseInt(document.getElementById("human-counter").innerHTML);
   score += 1;
   console.log(score);
   document.getElementById("human-counter").innerHTML = score.toString();   
}

function updateScoreComputer() {
    let score = parseInt(document.getElementById("computer-counter").innerHTML);
    score += 1;
    console.log(score);
    document.getElementById("computer-counter").innerHTML = score.toString();  
}

function updateScorePop(gameWinner, playerChoice, computerChoice) {
    if (gameWinner == "NONE") {
        scorePop.textContent = "It's a tie! Both chose " + playerChoice;
    } else if (gameWinner == "Player") {
        scorePop.textContent = "Player wins with: " + playerChoice;
    } else {
        scorePop.textContent = "Computer wins with: " + computerChoice;
    }
}


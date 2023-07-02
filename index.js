function getComputerChoice () { 
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
            break;
        case 1: 
            return "Scissors";
            break;
        case 2:
            return "Paper";
            break;
        default:
            break;
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            return "Tie, both chose Rock.";
        }
        else if (computerSelection == "Scissors") {
            return "Player Wins, Rock beats Scissors";
        }
        else {
            return "Player Loses, Paper Beats Rock";
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return "Player Wins, Paper beats Rock";
        }
        else if (computerSelection == "Scissors") {
            return "Player Loses, Scissors beats Paper";
        }
        else {
            return "Tie, both chose Paper";
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return "Player Loses, Rock beat Scissors";
        }
        else if (computerSelection == "Scissors") {
            return "Tie, both chose scissors";
        }
        else {
            return "Player Wins, Scissors beat Paper";
        }
    }
}

const playerSelection = "Paper";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
function playGameRock() {
    let computerSelection = getComputerChoice();
    console.log(playGame(computerSelection, "Rock"));
}

function playGamePaper() {
    let computerSelection = getComputerChoice();
    console.log(playGame(computerSelection, "Paper"));
}

function playGameScissors() {
    let computerSelection = getComputerChoice();
    playGame(computerSelection, "Scissors");
}

function playGame(computerSelection, playerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            return "Tie, both chose Rock.";
        }
        else if (computerSelection == "Scissors") {
            updateScoreHuman();
        }
        else {
            updateScoreComputer();
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            updateScoreHuman();
        }
        else if (computerSelection == "Scissors") {
            updateScoreComputer();
        }
        else {
            return "Tie, both chose Paper";
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            updateScoreComputer();
        }
        else if (computerSelection == "Scissors") {
            
        }
        else {
            updateScoreHuman();
        }
    }
} 

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


function updateScoreHuman() {
   let score = parseInt(document.getElementById("human-counter").innerHTML);
   score += 1;
   console.log(score);
   document.getElementById("human-counter").innerHTML = score.toString();   
}

function updateScoreComputer() {
    let score = parseInt(document.getElementById("human-counter").innerHTML);
    score += 1;
    console.log(score);
    document.getElementById("computer-counter").innerHTML = score.toString();  
}
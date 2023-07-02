function getComputerChoice () { 
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 1:
            return "Rock";
            break;
        case 2: 
            return "Scissors";
            break;
        case 3:
            return "Paper";
            break;
        default:
            break;
    }
}
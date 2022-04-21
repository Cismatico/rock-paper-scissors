function computerPlay() {
    let myArray = ['rock', 'paper', 'scissors'];
    let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    return randomItem;
}

function playRound(playerSelection, computerSelection) {
    let pSelection = playerSelection.toLowerCase();
    let result = 0;

    if (pSelection === 'rock' && computerSelection === 'paper') {
        result = 0;
    } else if (pSelection === 'rock' && computerSelection === 'scissors') {
        result = 1;
    } else if (pSelection === 'paper' && computerSelection === 'rock') {
        result = 1;
    } else if (pSelection === 'paper' && computerSelection === 'scissors') {
        result = 0;
    } else if (pSelection === 'scissors' && computerSelection === 'rock') {
        result = 0;
    } else if (pSelection === 'scissors' && computerSelection === 'paper') {
        result = 1;
    } else {
        result = 2;
    }

    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose between "Rock", "Paper" and "Scissors"');
        let computerSelection = computerPlay();

        if (playRound(playerSelection, computerSelection) === 0) {
            computerScore++;
            console.log('You lose');
        } else if (playRound(playerSelection, computerSelection) === 1) {
            playerScore++;
            console.log('You win');
        } else {
            console.log('Tie');
        }
    }
}
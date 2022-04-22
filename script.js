startGame();

function computerPlay() {
    let myArray = ['rock', 'paper', 'scissors'];
    let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    return randomItem;
}

function playRound() {
    let result = 0;
    let playerSelection = this.name;
    let computerSelection = computerPlay();

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        result = 0;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result = 0;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = 0;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = 1;
    } else {
        result = 2;
    }

    updateScore(result);
}

function updateScore(result) {
    let playerScoreSpan = document.querySelector('.player-score');
    let computerScoreSpan = document.querySelector('.computer-score');
    let playerScore = parseInt(playerScoreSpan.textContent);
    let computerScore = parseInt(computerScoreSpan.textContent);
    let scoreMessage = document.querySelector('.container-message p');

    if (result === 1) {
        scoreMessage.textContent = 'Round result: You win the round!';
        playerScore++;
        playerScoreSpan.textContent = playerScore;
    } else if (result === 0) {
        scoreMessage.textContent = 'Round result: You lose the round!'
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    } else {
        scoreMessage.textContent = 'Round result: Tie!';
    }

    decideWinner(playerScore, computerScore);
}

function decideWinner(playerScore, computerScore) {
    let container = document.querySelector('.container-top');
    let matchMessage = document.createElement('p');
    if (playerScore === 5) {
        matchMessage.textContent = 'YOU WON THE GAME';
        container.appendChild(matchMessage);
        disableGameButtons();
        resetGame(container);
    } else if (computerScore === 5) {
        matchMessage.textContent = 'YOU LOST THE GAME';
        container.appendChild(matchMessage);
        disableGameButtons();
        resetGame(container);
    }

}

function resetGame(container) {
    let resetButton = document.createElement('button');
    resetButton.className = 'button-reset';
    resetButton.textContent = 'Reset';
    resetButton.addEventListener('click', resetScores);

    container.appendChild(resetButton);

}

function resetScores() {
    let playerScore = document.querySelector('.player-score');
    let computerScore = document.querySelector('.computer-score');
    let matchMessage = document.querySelector('.container-top p');

    playerScore.textContent = '0';
    computerScore.textContent = '0';
    matchMessage.remove();

    this.remove();
    startGame();
}

function disableGameButtons() {
    const btns = document.querySelectorAll('.button-game');

    btns.forEach(element => {
        element.disabled = true;
    });
}

function startGame() {
    const btns = document.querySelectorAll('.button-game');

    btns.forEach(element => {
        element.disabled = false;
        element.addEventListener('click', playRound);
    });
}


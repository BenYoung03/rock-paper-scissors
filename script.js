
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1){
        return 'ROCK';
    } else if (computerChoice === 2){
        return 'PAPER';
    } else if (computerChoice === 3){
        return 'SCISSORS';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if(playerSelection === computerSelection){
        return `Draw!`;
    }

    if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS'
    || playerSelection === 'PAPER' && computerSelection === 'ROCK'
    || playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    if(playerSelection === 'ROCK' && computerSelection === 'PAPER'
    || playerSelection === 'PAPER' && computerSelection === 'SCISSORS'
    || playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if(playerScore > computerScore){
        console.log('The player wins!');
    } else if (computerScore > playerScore) {
        console.log('The computer wins!');
    } else {
        console.log('Its a tie!');
    }
}
game();

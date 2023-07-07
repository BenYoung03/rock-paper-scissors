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
        return `Its a tie!`;
    }

    if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS'
    || playerSelection === 'PAPER' && computerSelection === 'ROCK'
    || playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    if(playerSelection === 'ROCK' && computerSelection === 'PAPER'
    || playerSelection === 'PAPER' && computerSelection === 'SCISSORS'
    || playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();

const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;


function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    });
}
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1){
        return 'Rock';
    } else if (computerChoice === 2){
        return 'Paper';
    } else if (computerChoice === 3){
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (playerSelection === computerSelection) {
        return 'Draw!';
    }

    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        playerScore++;
        score.textContent = `${playerScore} - ${computerScore}`;
        if(playerScore === 5){
            disableButtons();
            return `You win!`; 
        }
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')
    ) {
        computerScore++;
        score.textContent = `${playerScore} - ${computerScore}`;
        if(computerScore === 5){
            disableButtons();
            return `You lose!`; 
        }
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}


    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');
    const results = document.getElementById('results')

    rockBtn.addEventListener('click', () => results.textContent = (playRound('rock', getComputerChoice())));
    paperBtn.addEventListener('click', () => results.textContent =(playRound('paper', getComputerChoice())));
    scissorsBtn.addEventListener('click', () => results.textContent =(playRound('scissors', getComputerChoice())));    

    const container = document.querySelector('.player-button-container');
    const score = document.createElement('p');
    score.classList.add('score');
    score.textContent = `${playerScore} - ${computerScore}`;
    score.style.color = 'red';

    container.appendChild(score);
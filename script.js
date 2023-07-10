const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;


function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
        elem.style.backgroundColor = 'red';
    });
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    compRockBtn.style.backgroundColor = 'white';
    compPaperBtn.style.backgroundColor = 'white';
    compScissorsBtn.style.backgroundColor = 'white';
    if (computerChoice === 1){
        compRockBtn.style.backgroundColor = 'green';
        return 'Rock';
    } else if (computerChoice === 2){
        compPaperBtn.style.backgroundColor = 'green';
        return 'Paper';
    } else if (computerChoice === 3){
        compScissorsBtn.style.backgroundColor = 'green';
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
        player.textContent = `Score: ${playerScore}`;
        if(playerScore === 5){
            disableButtons();
            return `You win!`; 
        }
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

    if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')
    ) {
        computerScore++;
        computer.textContent = `Score: ${computerScore}`;
        if(computerScore === 5){
            disableButtons();
            return `You lose!`; 
        }
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}


const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const compRockBtn = document.getElementById('rock-computer');
const compPaperBtn = document.getElementById('paper-computer');
const compScissorsBtn = document.getElementById('scissors-computer');
const results = document.getElementById('results')

rockBtn.addEventListener('click', () => results.textContent = (playRound('rock', getComputerChoice())));
paperBtn.addEventListener('click', () => results.textContent =(playRound('paper', getComputerChoice())));
scissorsBtn.addEventListener('click', () => results.textContent =(playRound('scissors', getComputerChoice())));    

const playerContainer = document.querySelector('.player-button-container');
const player = document.createElement('p');
player.classList.add('score');
player.textContent = `Score: ${playerScore}`;
player.style.color = 'red';

playerContainer.appendChild(player);

const computerContainer = document.querySelector('.computer-button-container');
const computer = document.createElement('p');
computer.classList.add('score');
computer.textContent = `Score: ${computerScore}`;
computer.style.color = 'red';

computerContainer.appendChild(computer);
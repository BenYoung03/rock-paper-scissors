const buttons = document.querySelectorAll('.game');
let playerScore = 0;
let computerScore = 0;
let compWin = false;
let computerChoice = 0;

const resetBtn = document.querySelector('#reset');

//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1){
        return 'Rock';
    } else if (computerChoice === 2){   
        return 'Paper';
    } else if (computerChoice === 3){
        return 'Scissors';
    }
}

function changeCompButtonColour() {
    if (computerChoice === 1){
        if(compWin === true) compRockBtn.style.backgroundColor = 'green'; 
        else compRockBtn.style.backgroundColor = 'red'; 
    }
    if (computerChoice === 2){
        if(compWin === true) compPaperBtn.style.backgroundColor = 'green'; 
        else compPaperBtn.style.backgroundColor = 'red'; 
    }
    if (computerChoice === 3){
        if(compWin === true) compScissorsBtn.style.backgroundColor = 'green'; 
        else compScissorsBtn.style.backgroundColor = 'red'; 
    }
}

function playRound(playerSelection, computerSelection) {

    buttons.forEach(elem => {
        elem.style.backgroundColor = 'white';
    });
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (playerSelection === computerSelection) {
        compWin = true;
        if(playerSelection === 'Rock'){
            rockBtn.style.backgroundColor = 'green';
            changeCompButtonColour();
        } else if (playerSelection === 'Paper') {
            paperBtn.style.backgroundColor = 'green';
            changeCompButtonColour();
        }else {
            scissorsBtn.style.backgroundColor = 'green';
            changeCompButtonColour();
        }
        return 'Draw!';
    }

    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        playerScore++;
        compWin = false;
        player.textContent = `Score: ${playerScore}`;

        if(playerSelection === 'Rock'){
            rockBtn.style.backgroundColor = 'green';
            changeCompButtonColour();
        } else if (playerSelection === 'Paper') {
            paperBtn.style.backgroundColor = 'green';
            changeCompButtonColour();
        }else {
            scissorsBtn.style.backgroundColor = 'green';
            changeCompButtonColour();
        }

        if(playerScore === 5){
            buttons.forEach(elem => {
                elem.disabled = true;
                elem.style.backgroundColor = 'green';
            });
            const audio = document.getElementById('win');
            audio.play();
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
        compWin = true;
        computer.textContent = `Score: ${computerScore}`;

        if(playerSelection === 'Rock'){
            rockBtn.style.backgroundColor = 'red';
            changeCompButtonColour();
        } else if (playerSelection === 'Paper') {
            paperBtn.style.backgroundColor = 'red';
            changeCompButtonColour();
        }else {
            scissorsBtn.style.backgroundColor = 'red';
            changeCompButtonColour();
        }

        if(computerScore === 5){
            buttons.forEach(elem => {
                elem.disabled = true;
                elem.style.backgroundColor = 'red';
            });
            const audio = document.getElementById('loss');
            audio.play();
            return `You lose!`; 
        }
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// UI

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const compRockBtn = document.getElementById('rock-computer');
const compPaperBtn = document.getElementById('paper-computer');
const compScissorsBtn = document.getElementById('scissors-computer');
const results = document.getElementById('results')


rockBtn.addEventListener('click', function() {
    results.textContent = (playRound('rock', getComputerChoice()));
    const audio = document.getElementById('click');
    audio.currentTime = 0;
    audio.play();
});

paperBtn.addEventListener('click', function() {
    results.textContent = (playRound('paper', getComputerChoice()));
    const audio = document.getElementById('click');
    audio.currentTime = 0;
    audio.play();
});

scissorsBtn.addEventListener('click', function() {
    results.textContent = (playRound('scissors', getComputerChoice()));
    const audio = document.getElementById('click');
    audio.currentTime = 0;
    audio.play();
});

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
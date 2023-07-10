//Global variables
let playerScore = 0;
let computerScore = 0;
let compWin = false;
let computerChoice = 0;

//Reset button
const resetBtn = document.querySelector('#reset');

//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());

//Function generates a computer choice (one of rock, paper or scissors)
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

//Changes the colour of the computer button on round completetion depending on choice, and win or loss
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

//Plays a round
function playRound(playerSelection, computerSelection) {

    //Resets all buttons colours
    buttons.forEach(elem => {
        elem.style.backgroundColor = 'white';
    });

    //Runs if a draw occurs
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

    //If the player beats the computer
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        //Increment player score and update on screen text
        playerScore++;
        compWin = false;
        player.textContent = `Score: ${playerScore}`;

        //Selects the correct player choice and updates button colours
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

        //Ends if player score is equal to 5 resulting in a game win
        if(playerScore === 5){
            buttons.forEach(elem => {
                elem.disabled = true;
                elem.style.backgroundColor = 'green';
            });
            const audio = document.getElementById('win');
            audio.play();
            return `You win!`; 
        }
        //Updates result text with the correct round results
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

    //If player loses to computer
    if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')
    ) {
        //Increment computer score and update on screen text
        computerScore++;
        compWin = true;
        computer.textContent = `Score: ${computerScore}`;

        //Selects the correct player choice and updates button colours
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

        //Ends if computer score is equal to 5 resulting in a game loss
        if(computerScore === 5){
            buttons.forEach(elem => {
                elem.disabled = true;
                elem.style.backgroundColor = 'red';
            });
            const audio = document.getElementById('loss');
            audio.play();
            return `You lose!`; 
        }
        //Updates result text with the correct round results
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
const buttons = document.querySelectorAll('.game');

//Event listeners for the player buttons that send the correct move to the playRound function and plays audio on click
rockBtn.addEventListener('click', function() {
    results.textContent = (playRound('Rock', getComputerChoice()));
    const audio = document.getElementById('click');
    audio.currentTime = 0;
    audio.play();
});

paperBtn.addEventListener('click', function() {
    results.textContent = (playRound('Paper', getComputerChoice()));
    const audio = document.getElementById('click');
    audio.currentTime = 0;
    audio.play();
});

scissorsBtn.addEventListener('click', function() {
    results.textContent = (playRound('Scissors', getComputerChoice()));
    const audio = document.getElementById('click');
    audio.currentTime = 0;
    audio.play();
});

//Makes the player score text a child of the playerContainer
const playerContainer = document.querySelector('.player-button-container');
const player = document.createElement('p');
player.classList.add('score');
player.textContent = `Score: ${playerScore}`;
player.style.color = 'red';

playerContainer.appendChild(player);

//Makes the computer score text a child of the computerContainer
const computerContainer = document.querySelector('.computer-button-container');
const computer = document.createElement('p');
computer.classList.add('score');
computer.textContent = `Score: ${computerScore}`;
computer.style.color = 'red';

computerContainer.appendChild(computer);
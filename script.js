var btn = document.querySelectorAll('.btn');
btn.forEach(button => button.addEventListener('click', playRound));

var playAgain = document.createElement('button');
playAgain.classList.add('btn');
playAgain.textContent = 'Play again!';
playAgain.addEventListener('click',restartGame);

var container = document.querySelector('.container');
var playerWins = 0;
var computerWins = 0;

function game(wins) {
    let score = document.querySelector('#current-score');
    let gameWinner = document.querySelector('#game-winner');
    
    if (wins[0] === 1) {
        playerWins++;
    } else if (wins[1] === 1) {
        computerWins++;
    }
    score.textContent = `PLAYER: ${playerWins} // COMPUTER: ${computerWins}`;

    if (playerWins === 5) {
        gameWinner.textContent = 'The player wins this time!';
        btn.forEach(button => button.disabled = true);
        container.appendChild(playAgain);
    } else if (computerWins === 5) {
        gameWinner.textContent = 'The computer wins this time!';
        btn.forEach(button => button.disabled = true);
        container.appendChild(playAgain);
    }
}

function computerPlay() {
    let choice = Math.round(Math.random() * 2); //Randomize the computer's play using a whole number from 0 to 2.
    let play = "";

    switch(choice) {
        case 0: 
            play = "rock";
            break;
        case 1:
            play = "paper";
            break;
        default:
            play = "scissor"
            break;
    }
    return play;
}

function playRound(e) {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();
    
    let play = document.querySelector('#play');
    let winner = document.querySelector('#winner');
    play.textContent = `Player played ${playerSelection}, computer played ${computerSelection}.`
    let wins = [0, 0]; //The round always starts with no score.
     
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "rock") {
                winner.textContent = 'Draw!'
            } else if (computerSelection === "paper") {
                winner.textContent = 'Computer wins this round!';
                wins[1] += 1;
            } else if (computerSelection === "scissor") {
                winner.textContent = 'Player wins this round!';
                wins[0] += 1;
            }
            break;

        case "paper":
            if (computerSelection === "paper") {
                winner.textContent = 'Draw!'
            } else if (computerSelection === "scissor") {
                winner.textContent = 'Computer wins this round!';
                wins[1] += 1;
            } else if (computerSelection === "rock") {
                winner.textContent = 'Player wins this round!';
                wins[0] += 1;
            }
            break;

        case "scissor":
            if (computerSelection === "scissor") {
                winner.textContent = 'Draw!'
            } else if (computerSelection === "rock") {
                winner.textContent = 'Computer wins this round!';
                wins[1] += 1;
            } else if (computerSelection === "paper") {
                winner.textContent = 'Player wins this round!';
                wins[0] += 1;
            }
            break;
        
        default:
            console.log('Enter a valid play.');
            break;
    }
    
    game(wins);
}

function restartGame() {
    window.location.reload();
}

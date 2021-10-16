function game() {
    let wins = [0, 0]; //Array containing the winner of each round. wins[0] is the player, wins[1] is the computer.
    let playerWins = 0; //Both players start with 0 points.
    let computerWins = 0;

    while (playerWins < 5 && computerWins < 5) { //Keep playing until someone gets to 5 points.
        let playerSelection = prompt('Enter your play: ');
        let computerSelection = computerPlay();
        wins = playRound(playerSelection,computerSelection);
        if (wins[0] === 1) {
            playerWins++;
        } else if (wins[1] === 1) {
            computerWins++;
        }
        console.log(`Player has ${playerWins} points. Computer has ${computerWins} points.`);
    }

    if (playerWins > computerWins) {
        console.log('The player wins this time!'); 
    } else {
        console.log('The computer wins this time!');
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

function playRound(playerSelection,computerSelection) {
    let wins = [0, 0]; //The round always starts with no score.
    playerSelection = playerSelection.split('').map(x => x.toLowerCase()).join('');
    console.log(`Player played ${playerSelection}, computer played ${computerSelection}.`);
    
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "rock") {
                console.log('Draw!');
            } else if (computerSelection === "paper") {
                console.log('Computer wins!');
                wins[1] += 1;
            } else if (computerSelection === "scissor") {
                console.log('Player wins!');
                wins[0] += 1;
            }
            break;

        case "paper":
            if (computerSelection === "paper") {
                console.log('Draw!');
            } else if (computerSelection === "scissor") {
                console.log('Computer wins!');
                wins[1] += 1;
            } else if (computerSelection === "rock") {
                console.log('Player wins!');
                wins[0] += 1;
            }
            break;

        case "scissor":
            if (computerSelection === "scissor") {
                console.log('Draw!');
            } else if (computerSelection === "rock") {
                console.log('Computer wins!');
                wins[1] += 1;
            } else if (computerSelection === "paper") {
                console.log('Player wins!');
                wins[0] += 1;
            }
            break;
        
        default:
            console.log('Enter a valid play.');
            break;
    }
    
    return wins;
}

function game() {
    let wins = [0, 0];
    let playerWins = 0;
    let computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
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
    let choice = Math.round(Math.random() * 2);
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

function playRound(player,computer) {
    let wins = [0, 0];
    player = player.split('').map(x => x.toLowerCase()).join('');
    console.log(`Player played ${player}, computer played ${computer}.`);
    
    switch (player) {
        case "rock":
            if (computer === "rock") {
                console.log('Draw!');
            } else if (computer === "paper") {
                console.log('Computer wins!');
                wins[1] += 1;
            } else if (computer === "scissor") {
                console.log('Player wins!');
                wins[0] += 1;
            }
            break;

        case "paper":
            if (computer === "paper") {
                console.log('Draw!');
            } else if (computer === "scissor") {
                console.log('Computer wins!');
                wins[1] += 1;
            } else if (computer === "rock") {
                console.log('Player wins!');
                wins[0] += 1;
            }
            break;

        case "scissor":
            if (computer === "scissor") {
                console.log('Draw!');
            } else if (computer === "rock") {
                console.log('Computer wins!');
                wins[1] += 1;
            } else if (computer === "paper") {
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

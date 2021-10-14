function game() {
    let wins = [0, 0]; //Array containing the winner of each round. wins[0] is the player, wins[1] is the computer.
    let playerWins = 0; //Both players start with 0 points.
    let computerWins = 0;

    while (playerWins < 5 && computerWins < 5) { //Keep playing until someone gets to 5 points.
        let playerSelection = prompt('Enter your play: '); //Prompts the user to insert his play.
        let computerSelection = computerPlay(); //Gets the computer's play.
        wins = playRound(playerSelection,computerSelection);
        if (wins[0] === 1) { //If the player beat the computer on this round, give them 1 point.
            playerWins++;
        } else if (wins[1] === 1) { //If the computer beat the player on this round, give it a point.
            computerWins++;
        }
        console.log(`Player has ${playerWins} points. Computer has ${computerWins} points.`); //Tells the player the score.
    }

    if (playerWins > computerWins) { //Let the player know who got to 5 points first.
        console.log('The player wins this time!'); 
    } else {
        console.log('The computer wins this time!');
    }
}

function computerPlay() {
    let choice = Math.round(Math.random() * 2); //Randomize the computer's play using a whole number from 0 to 2.
    let play = "";

    switch(choice) { //Assigning a play to each number value.
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
    let wins = [0, 0]; //The round always starts with no score.
    player = player.split('').map(x => x.toLowerCase()).join(''); //Converts any player input to lower case.
    console.log(`Player played ${player}, computer played ${computer}.`); //Displays the player and the computer's plays for this round.
    
    switch (player) { //Decisions to determine who wins given the player's play.
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
    
    return wins; //Returns an array which represents who won the round. wins == [1, 0] if the player won, wins == [0, 1] if the computer won.
}

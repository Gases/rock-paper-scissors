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
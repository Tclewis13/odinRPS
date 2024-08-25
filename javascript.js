



playGame();






function playGame(){

    let playerScore = 0;
    let compScore = 0;

    for (let i = 1; i < 6; i++) {
        let rando = getRandom();
        let compChoice = getCompChoice(rando);

        console.log('Begin Round ' + i);

        let playerChoice = prompt("What is your play?");
        playerChoice = playerChoice.toLowerCase();

        console.log('Player picks ' + playerChoice + '. Computer picks ' + compChoice + '.');
        playRound(playerChoice,compChoice);

        console.log('Scores at end of Round ' + i + ': Player at ' + playerScore + ' Computer at ' + compScore);
    } 

    if(playerScore > compScore){
        console.log('Final: Player Wins!');
    }
    else if(compScore > playerScore){
        console.log('Final: Computer Wins!');
    }
    else{
        console.log('Final: Tie!');
    }

    function playRound(playerChoice, compChoice){
        if(playerChoice === 'rock'){
            switch(compChoice){
                case 'rock':
                    console.log('Tie!');
                    break;
                case 'paper':
                    console.log('Lose! Paper beats Rock.');
                    compScore++;
                    break;
                case 'scissors':
                    console.log('Win! Rock beats Scissors.');
                    playerScore++;
                    break
            }
        }
        else if(playerChoice === 'paper'){
            switch(compChoice){
                case 'rock':
                    console.log('Win! Paper beats rock.');
                    playerScore++;
                    break;
                case 'paper':
                    console.log('Tie!');
                    break;
                case 'scissors':
                    console.log('Lose! Scissors beats Paper.');
                    compScore++;
                    break
            }
        }
        else if(playerChoice === 'scissors'){
            switch(compChoice){
                case 'rock':
                    console.log('Lose! Rock beats Scissors.');
                    compScore++;
                    break;
                case 'paper':
                    console.log('Win! Scissors beats paper.');
                    playerScore++;
                    break;
                case 'scissors':
                    console.log('Tie!');
                    break
            }
        }
        else{
            console.log('Invalid Play');
            return null;
        }
    }
}


function getRandom(){
    return Math.floor(Math.random() * (3) + 1);
}
function getCompChoice(rando){
    switch(rando) {
        case 1:  
            return 'rock';
            break;
      
        case 2:  
            return 'paper';
            break;
        
        case 3 :
            return 'scissors';
            break;
    }
}
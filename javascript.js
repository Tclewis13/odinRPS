
    let playerScore = 0;
    let compScore = 0;

    const results = document.querySelector(".results");
    const score = document.querySelector(".score");
    
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", function(e) {
            playRound(button.id);
        });
    });

    //if(playerScore > compScore){
    //    console.log('Final: Player Wins!');
    //}
    //else if(compScore > playerScore){
    //    console.log('Final: Computer Wins!');
    //}
    //else{
    //    console.log('Final: Tie!');
    //}

    function playRound(playerChoice){
        let rando = getRandom();
        let compChoice = getCompChoice(rando);
        if(playerChoice === 'rock'){
            switch(compChoice){
                case 'rock':
                    results.textContent = ('Tie!');
                    break;
                case 'paper':
                    results.textContent = ('Lose! Paper beats Rock.');
                    compScore++;
                    break;
                case 'scissors':
                    results.textContent = ('Win! Rock beats Scissors.');
                    playerScore++;
                    break
            }
        }
        else if(playerChoice === 'paper'){
            switch(compChoice){
                case 'rock':
                    results.textContent = ('Win! Paper beats rock.');
                    playerScore++;
                    break;
                case 'paper':
                    results.textContent = ('Tie!');
                    break;
                case 'scissors':
                    results.textContent = ('Lose! Scissors beats Paper.');
                    compScore++;
                    break
            }
        }
        else if(playerChoice === 'scissors'){
            switch(compChoice){
                case 'rock':
                    results.textContent = ('Lose! Rock beats Scissors.');
                    compScore++;
                    break;
                case 'paper':
                    results.textContent = ('Win! Scissors beats paper.');
                    playerScore++;
                    break;
                case 'scissors':
                    results.textContent = ('Tie!');
                    break
            }
        }
        else{
            console.log('Invalid Play');
            return null;
        }
        score.textContent = ("Player: " + playerScore + " Computer: " + compScore);
        if(playerScore >= 5){
            alert("You win!");
            
        }
        else if (compScore >=5){
            alert("Computer wins!");
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
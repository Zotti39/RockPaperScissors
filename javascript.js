let playerVitories = 0;
let computerVitories = 0;
function getComputerChoice(){
    const variavel1 = "rock";
    const variavel2 = "paper";
    const variavel3 = "scissors";
    let number = Math.floor(Math.random() * 3);
    let selectedVariable = null;
    if (number == 0){
        selectedVariable = variavel1;
    }
    else if (number == 1){
        selectedVariable = variavel2;
    }
    else if (number == 2){
        selectedVariable = variavel3;
    } 
    return selectedVariable;
}
function playRound(){
    const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    if (playerSelection == computerSelection){
        return "It's a draw";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerVitories++;
        return "You win, rock BEATS scissors! :)";
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        playerVitories++;
        return "You win, paper WRAPS rock! :)";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerVitories++;
        return "You win, scissors CUT paper! :)";
    }
    else if (computerSelection == "rock" && playerSelection == "scissors"){
        computerVitories++;
        return "You lose, rock BEATS scissors! :(";
    }
    else if (computerSelection == "paper" && playerSelection == "rock"){
        computerVitories++;
        return "You lose, paper WRAPS rock! :(";
    }
    else if (computerSelection == "scissors" && playerSelection == "paper"){
        computerVitories++;
        return "You lose, scissors CUT paper! :(";
    }
    else{
        return "Something went wrong";
    }
    /*else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")){
            playerVitories++;
            return "You win! :)";
        }
    else{
        computerVitories++;
        return "You lose! :( ";
    }*/
}




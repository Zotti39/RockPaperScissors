let playerVitories = 0;
let computerVitories = 0;

let botao = document.getElementById("botao");
let texto = document.getElementById("texto");

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
    console.log(`computer chose : ${computerSelection}`)
    if (playerSelection == computerSelection){
        texto.innerHTML = "It's a draw";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerVitories++;
        texto.innerHTML = "You win, rock BEATS scissors! :)";
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        playerVitories++;
        texto.innerHTML = "You win, paper WRAPS rock! :)";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerVitories++;
        texto.innerHTML = "You win, scissors CUT paper! :)";
    }
    else if (computerSelection == "rock" && playerSelection == "scissors"){
        computerVitories++;
        texto.innerHTML = "You lose, rock BEATS scissors! :(";
    }
    else if (computerSelection == "paper" && playerSelection == "rock"){
        computerVitories++;
        texto.innerHTML = "You lose, paper WRAPS rock! :(";
    }
    else if (computerSelection == "scissors" && playerSelection == "paper"){
        computerVitories++;
        texto.innerHTML = "You lose, scissors CUT paper! :(";
    }
    else{
        texto.innerHTML = "Something went wrong";
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
botao.addEventListener("click", playRound);
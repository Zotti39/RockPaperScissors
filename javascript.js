let playerVitories = 0;
let computerVitories = 0;

const botaoRock = document.querySelector('#rock');
const botaoPaper = document.querySelector('#paper');
const botaoScissors = document.querySelector('#scissors');
const texto = document.querySelector('#texto');

const computerScore = document.querySelector('#computerScore');
const playerScore = document.querySelector('#playerScore');

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
function playRound(x){
    const playerSelection = x.value;
    const computerSelection = getComputerChoice();
    console.log(`computer chose : ${computerSelection}`)
    if (playerSelection == computerSelection){
        texto.textContent = "It's a draw";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerVitories++;
        texto.textContent = "You win, rock BEATS scissors! :)";
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        playerVitories++;
        texto.textContent = "You win, paper WRAPS rock! :)";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerVitories++;
        texto.textContent = "You win, scissors CUT paper! :)";
    }
    else if (computerSelection == "rock" && playerSelection == "scissors"){
        computerVitories++;
        texto.textContent = "You lose, rock BEATS scissors! :(";
    }
    else if (computerSelection == "paper" && playerSelection == "rock"){
        computerVitories++;
        texto.textContent = "You lose, paper WRAPS rock! :(";
    }
    else if (computerSelection == "scissors" && playerSelection == "paper"){
        computerVitories++;
        texto.textContent = "You lose, scissors CUT paper! :(";
    }
    else{
        texto.textContent = "Something went wrong";
    }
    playerScore.textContent = 'Player: ' + playerVitories;
    computerScore.textContent = 'Computer: ' + computerVitories;
}
botaoRock.addEventListener("click", ()=>{
    playRound(botaoRock);
});

botaoPaper.addEventListener("click", ()=>{
    playRound(botaoPaper);
});

botaoScissors.addEventListener("click", ()=>{
    playRound(botaoScissors);
});

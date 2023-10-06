let playerVitories = 0;
let computerVitories = 0;

const botaoRock = document.querySelector('#rock');
const botaoPaper = document.querySelector('#paper');
const botaoScissors = document.querySelector('#scissors');
const texto = document.querySelector('#texto');

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

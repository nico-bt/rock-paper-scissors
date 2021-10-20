
function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random()*3);
    return options[random];
}

function play(playerSelection, computerSelection) {
    if (playerSelection ==="rock") {
        if (computerSelection==="paper") {
            //return("You lose! Paper beats Rock")
            return -1;
        }
        if (computerSelection === "scissors") {
            //return ("You win! Rock beats Scissors")
            return 1;
        }
        if (computerSelection === "rock") {
            //return ("Draw")
            return 0;
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            //return ("Draw")
            return 0;
        }
        if (computerSelection === "scissors") {
            //return ("You lose! Scissors beats Paper")
            return -1;
        }
        if (computerSelection === "rock") {
            //return ("You win! Paper beats Rock")
            return 1;
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            //return ("You win! Scissors beats Paper")
            return 1;
        }
        if (computerSelection === "scissors") {
            //return ("Draw")
            return 0;
        }
        if (computerSelection === "rock") {
            //return ("You lose! Rock beats Scissors")
            return -1;
        }
    }
}

let history = [];
let score = 0;
function game(playerSelection) {
    let computerSelection = computerPlay()
    let result = play(playerSelection, computerSelection);
    score = score + result;
    history.push(result);

    pHumanMove.innerText=`You: ${playerSelection}`;
    pComputerMove.innerText=`Computer: ${computerSelection}`
    
    if (result=== 0) {pResult.innerText="Draw"; pResult.style.backgroundColor="gold"}
    if (result === 1) { pResult.innerText="Win"; pResult.style.backgroundColor="green"}
    if (result === -1) { pResult.innerText="Lose"; pResult.style.backgroundColor="red"}

    pHistory.innerText = `Puntaje acumulado: ${score}`;
}

//==========================================================================
// Event Listeners
//==========================================================================

const buttons = document.querySelectorAll("button");
const pHumanMove = document.querySelector("#humanMove");
const pComputerMove = document.querySelector("#computerMove");
const pResult = document.querySelector("#result");
const pHistory = document.querySelector("#history");

buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let humanMove = e.target.id;
        game(humanMove);
    })
})


function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random()*3);
    return options[random];
}

function play(playerSelection, computerSelection) {
    if (playerSelection ==="rock") {
        if (computerSelection==="Paper") {
            //return("You lose! Paper beats Rock")
            return -1;
        }
        if (computerSelection === "Scissors") {
            //return ("You win! Rock beats Scissors")
            return 1;
        }
        if (computerSelection === "Rock") {
            //return ("Draw")
            return 0;
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "Paper") {
            //return ("Draw")
            return 0;
        }
        if (computerSelection === "Scissors") {
            //return ("You lose! Scissors beats Paper")
            return -1;
        }
        if (computerSelection === "Rock") {
            //return ("You win! Paper beats Rock")
            return 1;
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "Paper") {
            //return ("You win! Scissors beats Paper")
            return 1;
        }
        if (computerSelection === "Scissors") {
            //return ("Draw")
            return 0;
        }
        if (computerSelection === "Rock") {
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
    
    if (result=== 0) {pResult.innerText="Draw"}
    if (result === 1) { pResult.innerText="Win"}
    if (result === -1) { pResult.innerText="Lose"}

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
        game(e.target.id);
    })
})

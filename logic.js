
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

function game() {
    let history = [];
    let score = 0;
    for (let index = 0; index<5; index++) {
        let playerSelection = prompt("Your move: ").toLowerCase();
        let computerSelection = computerPlay()
        let result = play(playerSelection, computerSelection);
        score = score + result;
        history.push(result);
        
        console.log(`Your move: ${playerSelection}, Computer: ${computerSelection}`)
        if (result=== 0) {console.log("Draw")}
        if (result === 1) { console.log("Win") }
        if (result === -1) { console.log("Lose") }
    }
    
    console.table({resultados: history})
    console.log("score: " + score);
    if (score>0) {console.log("You win!")}
    if (score < 0) { console.log("You lose!") }
    if (score === 0) { console.log("Draw") }
}

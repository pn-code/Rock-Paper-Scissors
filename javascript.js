//functions
let playerScore = 0;
let computerScore = 0;
let computerChoice;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 10);
    if (random <= 3) {
        let computerChoice = "rock";
        return computerChoice;
    } else if (random >= 7) {
        let computerChoice = "paper";
        return computerChoice;
    } else {
        let computerChoice = "scissors";
        return computerChoice;
    }
};

function roundResults (playerChoice, computerChoice) {

    if (computerChoice == playerChoice) {
        let result = "It's a draw";
        return result;
    
    } else if (playerChoice == "rock" && computerChoice == "scissors" ||
               playerChoice == "scissors" && computerChoice == "paper" ||
               playerChoice == "paper" && computerChoice == "rock") {
    
                    let result = "You win!";
                    playerScore = ++playerScore;
                    computerScore = --computerScore;
                    return result;
    
    } else if (playerChoice == "rock" && computerChoice == "paper" ||
               playerChoice == "scissors" && computerChoice == "rock" ||
               playerChoice == "paper" && computerChoice == "scissors") {
                
                    let result = "YOU LOSE!";
                    playerScore = --playerScore;
                    computerScore = ++computerScore;
                    return result;
    
    }else {
        let result = "You've inputted the wrong key; this will count against you!" ; 
        playerScore = --playerScore;
        computerScore = ++computerScore;
        return result;

    }
    };
    
function playRound() {

    getComputerChoice();
    computerChoice = getComputerChoice();
    
    let playerChoice = prompt("Rock, paper, or scissors");
    
    console.log("You chose " +playerChoice);
    console.log("The computer chose " +computerChoice);
    
    
    let result = roundResults(playerChoice, computerChoice);
    console.log(result);
    }

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}    

//rock paper scissors

game();

if (playerScore > 0) {
    console.log("Congratulations, you won by " + playerScore)
}else if (playerScore == computerScore){
    console.log("There has been a draw.")
}else{
    console.log("Unfortunately, you have lost by " + computerScore)
}


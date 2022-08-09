let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerChoice;


function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        let computerChoice = "rock";
        return computerChoice;
    } else if (random === 1) {
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
               }

    };

function endGame(){
    if (playerScore == 5){
        const removeChoices = document.querySelector('#bigContainer');
        removeChoices.remove();

        const win = document.querySelector('body');
        const winMessage = document.createElement('div');
        winMessage.className = "endMessage";
        winMessage.textContent = "CONGRATULATIONS! YOU WON AGAINST THE COMPUTER!";
        win.appendChild(winMessage);

    }else if (playerScore == -5){
        const removeChoices = document.querySelector('#bigContainer');
        removeChoices.remove();

        const loss = document.querySelector('body');
        const lossMessage = document.createElement('div');
        lossMessage.className = "endMessage";
        lossMessage.textContent = "YOU LOST AGAINST THE COMPUTER! TRY AGAIN!";
        loss.appendChild(lossMessage);
    };
}
    
function playRound() {

    computerChoice = getComputerChoice();
    
    let result = roundResults(playerChoice, computerChoice);

    const score = document.querySelector('#score');
    score.textContent = " Your Score: "+playerScore;

    const resultConsole = document.querySelector('#results');
    resultConsole.textContent = result;

    const choices = document.querySelector('#results');
    const choicesContent = document.createElement('h4');
    choicesContent.textContent = "You chose "+playerChoice+" while the computer chose " +computerChoice+".";
    choices.appendChild(choicesContent);

    endGame();

}

const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    playerChoice = "rock";
    playRound();
})

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    playerChoice = "paper";
    playRound();
})

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
        playerChoice = "scissors";
        playRound();
})

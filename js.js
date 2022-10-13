// Rock paper scissors game that runs in the console

// function for randomly choosing rock, paper or scissors
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    console.log(choices[randomIndex]);
    return choices[randomIndex];
}

// function for getting player choice
function getPlayerChoice() {
        let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        return playerChoice;
    }

// function for comparing choices and determining winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors.";
    }
}

// function that plays game 5 times and displays winner
function game () {
    playRound(getPlayerChoice, getComputerChoice);
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;    
        }
    }

    if (playerScore === 5) {
        console.log("You win the game!");
    } else if (computerScore === 5) {
        console.log("You lose the game.");
    } 
}


game()
    playRound(getPlayerChoice(), getComputerChoice());
    game()

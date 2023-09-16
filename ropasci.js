
function playRound () {
  //gets the input of player
  const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
  const playerChoice = playerSelection.toLowerCase();
  
  function getComputerChoise() {
    //generetes a rundom number between 0 & 2
    const randomNumber = Math.floor(Math.random() * 3);
  
    //Maps the number to rock, paper or scissors
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }

  const computerSelection = getComputerChoise()

  //and the winner is...
  if (playerChoice === computerSelection) {
    return "It's a tie! ";
  } else if (
    (playerChoice === "rock" && computerSelection === "scissors") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scissors" && computerSelection === "paper")
  ) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);
    const result = playRound();
    console.log(result);
    const scores = `Player: ${playerScore}, Computer:${computerScore}`;
    console.log(scores);

    if (result.includes("You Win!")) {
      playerScore++;
    }
    else if(result.includes("You Lose!")) {
      computerScore++;
    }
  }
  console.log("Game Over!");

  if (playerScore > computerScore) {
    console.log("You win the game!");
  }
  else if (playerScore < computerScore) {
    console.log("You lose the game!");
  }
  else {
    console.log("It´s a tie!");
  }
}

game()
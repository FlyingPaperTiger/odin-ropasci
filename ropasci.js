
//Assignment exercise 3
/*
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

//console.log(Math.random())
//console.log(getComputerChoise())
*/
//Assignment exercise 4

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

const result = playRound();
console.log(result);

/*
//Assignment exercise 5
function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
*/

//Assignment exercise 3
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

//Assignment exercise 4


/*
//Assignment exercise 5
function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
*/
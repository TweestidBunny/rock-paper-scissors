// Change to int using unary plus
let getPlayerChoice = () => +prompt('1: Rock, 2: Paper, 3: Scissors') - 1;

// Change to int using unary plus
let getComputerChoice = () => +(Math.random() * 2).toFixed(0);

let playerScore = 0;

let computerScore = 0;

function compareChoice(pChoice, cChoice) {
  if (pChoice === 0) {
    cChoice === 1 ? computerScore++ : cChoice === 2 ? playerScore++ : console.log('Tie');
  } else if (pChoice === 1) {
    cChoice === 0 ? playerScore++ : cChoice === 2 ? computerScore++ : console.log('Tie');
  } else if (pChoice === 2) {
    cChoice === 0 ? computerScore++ : cChoice === 1 ? playerScore++ : console.log('Tie');
  }
}

// Game loop.
while (playerScore < 5 && computerScore < 5) {
  compareChoice(getPlayerChoice(), getComputerChoice());
  console.log(`Player Wins: ${playerScore}`);
  console.log(`Computer Wins: ${computerScore}`);
}

// Show winner.
console.log(playerScore > computerScore ? 'Player Wins!' : 'Computer Wins!')
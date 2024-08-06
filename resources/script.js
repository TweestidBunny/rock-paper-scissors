// Create function 'playerChoice'.
// Change to int.
let getPlayerChoice = () => +prompt('1: Rock, 2: Paper, 3: Scissors') - 1;
// console.log(playerChoice())

// Create function 'getComputerChoice'.
// Change to int.
let getComputerChoice = () => +(Math.random() * 2).toFixed(0);
// console.log(getComputerChoice())

// Create win counter for Player
let playerScore = 0;

// Create win counter for Computer
let computerScore = 0;

// Compare player choice and computer choice.
function compareChoice(pChoice, cChoice) {
  if (pChoice === 0) {
    cChoice === 1 ? computerScore++ : cChoice === 2 ? playerScore++ : console.log('Tie');
  } else if (pChoice === 1) {
    cChoice === 0 ? playerScore++ : cChoice === 2 ? computerScore++ : console.log('Tie');
  } else if (pChoice === 2) {
    cChoice === 0 ? computerScore++ : cChoice === 1 ? playerScore++ : console.log('Tie');
  }
}

// Create game loop.
while (playerScore < 5 && computerScore < 5) {
  compareChoice(getPlayerChoice(), getComputerChoice());
  console.log(`Player Wins: ${playerScore}`);
  console.log(`Computer Wins: ${computerScore}`);
}

// console.log winner.
console.log(playerScore > computerScore ? 'Player Wins!' : 'Computer Wins!')
// Create function 'playerChoice'.
// Change to int.
let getPlayerChoice = () => +prompt('1: Rock, 2: Paper, 3: Scissors') - 1;
// console.log(playerChoice())

// Create function 'getComputerChoice'.
// Change to int.
let getComputerChoice = () => +(Math.random() * 2).toFixed(0);
// console.log(getComputerChoice())

// Create win counter for Player
let playerWin = 0;

// Create win counter for Computer
let computerWin = 0;

// Compare player choice and computer choice.
function compareChoice(pChoice, cChoice) {
  if (pChoice === 0) {
    cChoice === 1 ? computerWin++ : cChoice === 2 ? playerWin++ : console.log('Tie');
  } else if (pChoice === 1) {
    cChoice === 0 ? playerWin++ : cChoice === 2 ? computerWin++ : console.log('Tie');
  } else if (pChoice === 2) {
    cChoice === 0 ? computerWin++ : cChoice === 1 ? playerWin++ : console.log('Tie');
  }
}

// Create game loop.
while (playerWin < 5 && computerWin < 5) {
  compareChoice(getPlayerChoice(), getComputerChoice());
  console.log(`Player Wins: ${playerWin}`);
  console.log(`Computer Wins: ${computerWin}`);
}

// console.log winner.
console.log(playerWin > computerWin ? 'Player Wins!' : 'Computer Wins!')
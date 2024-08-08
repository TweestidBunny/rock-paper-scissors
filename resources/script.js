// Change to int using unary plus
// let getPlayerChoice = () => +prompt('1: Rock, 2: Paper, 3: Scissors') - 1;

// Change to int using unary plus
// let getComputerChoice = () => +(Math.random() * 2).toFixed(0);

// let currentPlayerScore = 0;

// let currentComputerScore = 0;

// Game loop.
// while (currentPlayerScore < 5 && currentComputerScore < 5) {
//   compareChoice(getPlayerChoice(), getComputerChoice());
//   console.log(`Player Wins: ${currentPlayerScore}`);
//   console.log(`Computer Wins: ${currentComputerScore}`);
// }

// Show winner.
// console.log(currentPlayerScore > currentComputerScore ? 'Player Wins!' : 'Computer Wins!')


// Elements needing to be targeted with querySelector:

const setPlayerScore = document.querySelector('#playerScore');
const setComputerScore = document.querySelector('#computerScore');

const nextRound = document.querySelector('#nextRound');
const playAgain = document.querySelector('#playAgain');

const gameBtns = document.querySelectorAll('.gameBtn');

const playerImages = document.querySelectorAll('#playerImage img');
const computerImages = document.querySelectorAll('#computerImage img');

const main = document.querySelector('main');

const winner = document.querySelector('#winner');
const winnerText = document.querySelector('#winner p');

let currentPlayerScore = 0;
let currentComputerScore = 0;

let playerSelection;

//   When game is over, show 'Play Again' button.

// Compare each selection to see who wins.

gameBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    playerSelection = e.target.id;
    playerImages[e.target.id].classList.toggle('hidden');

    compareChoice(+playerSelection, getComputerChoice());
    toggleOnHidden(gameBtns);

    toggleOffHidden(nextRound);
  });
});

nextRound.addEventListener('click', () => {
  if (gameOver(currentPlayerScore, currentComputerScore)) {
    winnerText.textContent = `${checkWin(currentPlayerScore, currentComputerScore)} wins!`
    toggleOnHidden(main);
    toggleOffHidden(winner, playAgain)
  } else {
    toggleOffHidden(gameBtns);
  }
  toggleOnHidden(nextRound, playerImages, computerImages);
})

playAgain.addEventListener('click', () => {
  currentPlayerScore, currentComputerScore = 0;
  toggleOnHidden(playAgain, winner, playerImages, computerImages, nextRound);
  toggleOffHidden(main, gameBtns);
})

function checkWin(pScore, cScore) {
  return pScore > cScore ? 'Player' : 'Computer';
}

function gameOver(pScore, cScore) {
  return pScore > 4 || cScore > 4;
}

function compareChoice(pChoice, cChoice) {
  if (pChoice === 0) {
    cChoice === 1 ? currentComputerScore++ : cChoice === 2 ? currentPlayerScore++ : console.log('Tie');
  } else if (pChoice === 1) {
    cChoice === 0 ? currentPlayerScore++ : cChoice === 2 ? currentComputerScore++ : console.log('Tie');
  } else if (pChoice === 2) {
    cChoice === 0 ? currentComputerScore++ : cChoice === 1 ? currentPlayerScore++ : console.log('Tie');
  }
  setPlayerScore.textContent = currentPlayerScore;
  setComputerScore.textContent = currentComputerScore;
}

function getComputerChoice() {
  const puterPick = +((Math.random() * 8).toFixed(0)) % 3;
  toggleOffHidden(computerImages[puterPick]);
  return puterPick;
}

function toggleOffHidden(...nodeList) {
  for (let nodeLI of nodeList) {
    if (nodeLI.length > 1) {
      nodeLI.forEach(node => {
        if ((node.classList.contains('hidden'))) {
          node.classList.toggle('hidden');
        }
      })
    } else {
      nodeLI.classList.toggle('hidden');
    }
  }
}

function toggleOnHidden(...nodeList) {
  for (let nodeLI of nodeList) {
    if (nodeLI.length > 1) {
      nodeLI.forEach(node => {
        if (!(node.classList.contains('hidden'))) {
          node.classList.toggle('hidden');
        }
      })
    } else if (!(nodeLI.classList.contains('hidden'))) {
      nodeLI.classList.toggle('hidden');
    }
  }
}

// const images = document.querySelectorAll('#playerImage img');
// const computerImages = document.querySelectorAll('#computerImage img');

// playerImages[0].classList.toggle('hidden');
// computerImages[1].classList.toggle('hidden');

// gameBtns[0].addEventListener('click', () => toggleOnHidden(main));
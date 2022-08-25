import '@/css/style.css';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const checkBtn = document.querySelector('.btn--check');
const restartBtn = document.querySelector('.btn--restart');

function displayGuessMessage(message) {
  document.querySelector('.results__message').textContent = message;
}

function startGame() {
  const guessingNumber = Number(document.querySelector('.number__input').value);

  if (!guessingNumber) {
    displayGuessMessage('Enter a number');
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.header__number').textContent = secretNumber;
    displayGuessMessage('You guessed it!');
    document.body.style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.header__number').style.width = '50rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Too much!' : 'Not enough'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMessage('Game Over!');
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = 'rgb(238, 15, 15)';
    }
  }
}

function restartGame() {
  displayGuessMessage('Start guessing');
  document.body.style.backgroundColor = 'rgb(0, 0, 0)';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number__input').value = '';
  document.querySelector('.header__number').textContent = '???';
  document.querySelector('.header__number').style.width = '25rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

checkBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);

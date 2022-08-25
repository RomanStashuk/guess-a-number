import '@/css/style.css';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.highscore');

document.querySelector('.btn--check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number__input').value);

  if (!guessingNumber) {
    document.querySelector('.results__message').textContent = 'Enter a number';
  }

  if (guessingNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.results__message').textContent = 'Too much!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.results__message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = 'rgb(238, 15, 15)';
    }
  }

  if (guessingNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.results__message').textContent = 'Not enough!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.results__message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = 'rgb(238, 15, 15)';
    }
  }

  if (guessingNumber === secretNumber) {
    document.querySelector('.header__number').textContent = secretNumber;
    document.querySelector('.results__message').textContent = 'You guessed it!';
    document.body.style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.header__number').style.width = '50rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

function restartGame() {
  document.querySelector('.results__message').textContent = 'Start guessing';
  document.body.style.backgroundColor = 'rgb(0, 0, 0)';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number__input').value = '';
  document.querySelector('.header__number').textContent = '???';
  document.querySelector('.header__number').style.width = '25rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

document.querySelector('.btn--restart').addEventListener('click', restartGame);
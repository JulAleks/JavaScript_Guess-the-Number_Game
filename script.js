// This project was completed as part of "The Complete JavaScript Course 2023: From Zero to Expert!" on Udemy, taught by Jonas Schmedtmann.
// Please be aware that not all of the code strictly follows the course's intended flow, as I have made adjustments to the logic.
'use strict';
let secretNum; // Declare secretNum in a scope accessible to both functions
let score = 20; // Initialize score here
let highScore = 0; //winnings
const game = function () {
  // Make the system choose a positive number between 1-20
  secretNum = Math.trunc(Math.random() * 20 + 1);
  score = 20; // Reset the score
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ''; // Clear the input field
  //if there were any winnings keep the score if not reset to zero
  if (highScore) {
    document.querySelector('.highscore').textContent = highScore;
  } else {
    document.querySelector('.highscore').textContent = 0;
  }
};

document.addEventListener('DOMContentLoaded', game); // Use DOMContentLoaded to start the game when the page loads

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please, input a valid number';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = 'Correct Number!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;
    highScore++;
    document.querySelector('.highscore').textContent = highScore;
  } else if (score > 1) {
    //checking if the value is too high or too low
    document.querySelector('.message').textContent =
      guess > secretNum ? 'Too high!' : 'Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Game Over!';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#FF0000';
  }
});

// Restarting the game
document.querySelector('.again').addEventListener('click', game);

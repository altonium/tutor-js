const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomNumber(1, 100);
let attempts = 0;

console.log('Welcome to the Number Guessing Game!');
console.log('I am thinking of a number between 1 and 100.');

function guessNumber() {
  readline.question('Enter your guess: ', (guess) => {
    attempts++;
    const userGuess = parseInt(guess, 10);

    if (userGuess === randomNumber) {
      console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
      readline.close();
    } else if (userGuess < randomNumber) {
      console.log('Too low! Try again.');
      guessNumber();
    } else {
      console.log('Too high! Try again.');
      guessNumber();
    }
  });
}

guessNumber();

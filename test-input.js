const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });


  readline.question('Enter your guess: ', (guess) => {
    console.log("Your guess is: "+guess);
    readline.close();
  });
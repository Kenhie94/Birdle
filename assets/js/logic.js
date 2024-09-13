// Empty array to store currentWord objects
const gameArray = [];
let attempt = 1;

// Function
// Starts the Birdle game 
function startBirdleGame() {
  const targetWord = wordGenerate();
  printBoard(targetWord);
}

// Function
// Will randomly select a word within wordPool array and push it into the global gameArray array
function wordGenerate() {
  const randomIndex = Math.floor(Math.random() * wordPool.length);
  gameArray.push(wordPool[randomIndex].toUpperCase());
  return [' ', ' ', ' ', ' '];
}

// Function
// This function is showing the board for the user to visual what is was correct and what was wrong.
function printBoard(match) {
  for (let guessCount = 0; guessCount < match.length; guessCount++) {
    if (match[guessCount] === " ") {
      console.log("_");
    } else {
      console.log(match[guessCount]);
    }
  }
  getGuess();
}

// Function
// This function is getting the users guess for the 4-letter word -> splitting it and then checking the letter with the targetWord letter to check if they match. If it matches, it will reply with the push that index with the letter, * if correct letter but wrong position, _ if letter is not in the word.
function getGuess() {
  let guess = prompt('Enter a 4-letter word:').toUpperCase().split('');
  let targetWord = gameArray[gameArray.length - 1].split('');
  let match = [];

  for (let guessCount = 0; guessCount < guess.length; guessCount++) {
    if (guess[guessCount] === targetWord[guessCount]) {
      match.push(guess[guessCount]); // Correct letter in the correct position
    } else if (targetWord.includes(guess[guessCount])) {
      match.push("*"); // Correct letter but wrong position
    } else {
      match.push("_"); // Letter not in the word
    }
  }

  verifyIfDone(match);
  printBoard(match);
}

// Function
// Checks the current attempts, if maxAttempt has been reached, game will display that you have lost, and ask to play again. If you guessed the word correctly within the maxAttempt then will display you win and ask to play again.
function verifyIfDone(match) {
  const maxAttempt = 6;
  while (attempt < maxAttempt) {
    if (match.join('') === gameArray[gameArray.length - 1]) {
      youWin();
      playAgain();
    }
    attempt++;
    return;
  }
  youLost();
  playAgain();
}

function youLost() {
  console.log('You Lost!');
}

function youWin() {
  console.log('You Win!');
}

function playAgain() {
  // startBirdleGame();
  console.log('endGame');
}
// Todo: This is where you call the function to update score and statistics

startBirdleGame();
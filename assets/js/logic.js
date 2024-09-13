// empty array to store currentWord objects
const gameArray = [];
let attempt = 1;

// Function
// for the Birdle game
function startBirdleGame() {
  const targetWord = wordGenerate();
  printBoard(targetWord);
}

// Function
// that will return a random word within the wordPool array
function wordGenerate() {
  const randomIndex = Math.floor(Math.random() * wordPool.length);
  gameArray.push(wordPool[randomIndex].toUpperCase());
  return [' ', ' ', ' ', ' '];
}

function printBoard(match) {
  console.log(match);
  // for (let guessCount = 0; guessCount < match.length; guessCount++) {
  //   if (match[guessCount] === ' ') {
  // console.log('_'); print underscore
  //   } else {
  // console.log(match[guessCount]); print matched letter
  //   }
  // }
  getGuess();
}

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
// Array
// empty array to store currentWord objects
const gameArray = [];
let playAgain = true;

// Function
// that will return a random word within the wordPool array
function wordGenerate() {
  const randomIndex = Math.floor(Math.random() * wordPool.length);
  gameArray.push(wordPool[randomIndex].toUpperCase());
  return [" ", " ", " ", " "];
}

// Function
// that reads from local storage and returns the data. If no data exists, return an empty array
function readLocalStorage() {
  const storage = JSON.parse(localStorage.getItem("currentWord")) || [];
  return storage;
}

// Function that takes a given object and saves the new data to the existing gameArray data in local storage
function storeLocalStorage(currentWord) {
  localStorage.setItem("currentWord", JSON.stringify(currentWord));
}

function exitGame() {
  playAgain = confirm("Do you want to continue?");
  if (!playAgain) {
    return;
  }

  startBirdleGame();
}

function playAgain() {
  const maxAttempt = 6;
  let attempt = 0;
  while (attempt < maxAttempt) {
    startBirdleGame();
  }
  // Todo: This is where you call the function to update score and statistics
  console.log('endGame')
};

function verifyIfDone(match) {
  if (match.join('') === gameArray[gameArray.length - 1]) {
    playAgain();
  }
  return;
}

function getGuess() {
  let guess = prompt("Enter a 4-letter word:").toUpperCase().split("");
  let targetWord = gameArray[gameArray.length - 1].split("");
  let match = [];

  for (let guessCount = 0; guessCount < guess.length; guessCount++) {
    for (let currentBoardCount = 0; currentBoardCount < targetWord.length; currentBoardCount++) {
      if (guess[guessCount] === targetWord[currentBoardCount]) {
        match.push(guess[guessCount]);
      } else {
        match.push(' ')
      }
    }
  }
  verifyIfDone(match)
  printBoard(match)
}

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
// for the Birdle game
function startBirdleGame() {
  while (playAgain) {
    const targetWord = wordGenerate();
    printBoard(targetWord);
  }
}

wordGenerate();

// Array
// empty array to store currentWord objects
const gameArray = [];

// Function
// that will return a random word within the wordPool array
function wordGenerate() {
  const randomIndex = Math.floor(Math.random() * wordPool.length);
  gameArray.push(wordPool[randomIndex].toUpperCase());
  const currentSplitWord = wordPool[randomIndex].toUpperCase().split("");
  return currentSplitWord;
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

// Function
// for the Birdle game
function birdleGame() {
  const maxAttempts = 5;
  let attempts = 0;

  while (attempts < maxAttempts) {
    let guess = prompt("Enter a 4-letter word:").toUpperCase().split("");

    if (!guess) {
      return;
    }

    for (let guessCount = 0; guessCount < guess.length; guessCount++) {
      for (let currentBoardCount = 0; currentBoardCount < gameArray[gameArray.length - 1].length; currentBoardCount++) {
        if ()
      }
    }
  }
}

wordGenerate();

// Empty array to store currentWord objects
const gameArray = [];
let attempt = 1; // Attempt counter

// Function to start the Birdle game
function startBirdleGame() {
  wordGenerate(); // Generate a new word to guess
}

// Function to randomly select a word within wordPool array and push it into the global gameArray array
function wordGenerate() {
  const randomIndex = Math.floor(Math.random() * wordPool.length);
  gameArray.push(wordPool[randomIndex].toUpperCase());
}

// Function to reset the game grid and clear all user input
function resetGrid() {
  const gridBoxes = document.querySelectorAll(".grid-box");

  // Clear all grid boxes by resetting their content and styles
  gridBoxes.forEach((box) => {
    box.textContent = ""; // Clear text content
    box.style.backgroundColor = ""; // Reset background color
    box.style.color = ""; // Reset text color
    box.style.textShadow = ""; // Reset text shadow
  });
  currentCol = 0;
  currentRow = 0;
  attempt = 0; // Reset attempt counter to start from the first row
}

// Function to show the board for the user to visualize what was correct and what was wrong
function printBoard(match) {
  // Select the current row based on the attempt
  console.log(attempt)
  const gridRow = document.querySelectorAll(`.grid-row`)[attempt - 1];
  const gridBoxes = gridRow.querySelectorAll(".grid-box");
  console.log(gridRow)
  console.log(gridBoxes)
  // Loop through and apply color changes based on match result
  for (let guessCount = 0; guessCount < match.length; guessCount++) {
    console.log(guessCount)
    let colorTileEl = gridBoxes[guessCount];
    if (match[guessCount] === "_") {
      colorTileEl.style.backgroundColor = "gray";
      colorTileEl.style.color = "white";
      colorTileEl.style.textShadow = "2px 2px 0 black";
    } else if (match[guessCount] === "*") {
      colorTileEl.style.backgroundColor = "#F5B751";
      colorTileEl.style.color = "white";
      colorTileEl.style.textShadow = "2px 2px 0 black";
    } else {
      colorTileEl.style.backgroundColor = "green";
      colorTileEl.style.color = "white";
      colorTileEl.style.textShadow = "2px 2px 0 black";
    }
  }
}

// Function to get the user's guess for the 4-letter word, splitting it, and checking it against the target word
function getGuess(guess) {
  let targetWord = gameArray[gameArray.length - 1].split("");
  let match = [];

  // Compare the guessed letters with the target word letters
  for (let guessCount = 0; guessCount < guess.length; guessCount++) {
    if (guess[guessCount] === targetWord[guessCount]) {
      match.push(guess[guessCount]); // Correct letter, correct position
    } else if (targetWord.includes(guess[guessCount])) {
      match.push("*"); // Correct letter but wrong position
    } else {
      match.push("_"); // Letter not in the word
    }
  }

  printBoard(match); // Update the visual grid for the current guess
  verifyIfDone(match); // Check if the player has won or lost

  attempt++; // Move to the next row after the current guess is processed
}

// Function to check if the player has won or lost, and ask to play again
function verifyIfDone(match) {
  const maxAttempt = 5;

  if (match.join("") === gameArray[gameArray.length - 1]) {
    youWin(); // The player guessed the correct word
    playAgain(); // Ask to play again
  } else if (attempt >= maxAttempt) {
    youLost(); // The player has run out of attempts
    playAgain(); // Ask to play again
  }
  return;
}

// Function called when the player wins
function youWin() {
  console.log("You Win!");
}

// Function called when the player loses
function youLost() {
  console.log("You Lost!");
}

// Function to ask the player to play again and reset the game state
function playAgain() {
  resetGrid(); // Reset the grid and visual elements
  // gameArray = []; // Clear the old game word
  startBirdleGame(); // Start a new game with a new word
}

// Start the game for the first time
startBirdleGame();

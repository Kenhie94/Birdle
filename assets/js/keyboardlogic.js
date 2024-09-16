// Select all the keys and grid boxes
const keys = document.querySelectorAll(".key");
const gridBoxes = document.querySelectorAll(".grid-box");

// Grid variables
let currentRow = 0;
let currentCol = 0;
const maxCols = 4;
const maxRows = 5;
let userGuessArray = [];

// Function to handle key press for letters
function handleKeyPress(e) {
  const key = e.target.textContent.trim(); // Get the letter pressed

  if (key === "Enter") {
    return; // Fixing enter glitch
  }

  if (key === "Del") {
    userGuessArray.pop(); // Removes the last key in the array
  } else {
    if (currentCol < maxCols) {
      const currentIndex = currentRow * maxCols + currentCol;
      gridBoxes[currentIndex].textContent = key; // Display the letter
      console.log(currentIndex)
      userGuessArray.push(key); // Pushes the last key into the array
      currentCol++; // Move to the next column
    }
  }
}

// Delete button
function handleDelete() {
  if (currentCol > 0) {
    currentCol--;
    const currentIndex = currentRow * maxCols + currentCol;
    gridBoxes[currentIndex].textContent = ""; // Clears the letter in the current box
  }
}

// Enter button
function handleEnter() {
  if (currentCol === maxCols) {
    const currentGuessArray = [...userGuessArray]
    userGuessArray= []; // Reset the array
    currentRow++; // Move to the next row
    currentCol = 0; // Reset to the first column of the new row
    getGuess(currentGuessArray)
    // Prevent moving past the last row
    if (currentRow >= maxRows) {
      currentRow = maxRows - 1;
    }
  }
}

//  event listeners to all letter keys
keys.forEach((key) => {
  key.addEventListener("click", handleKeyPress);
});

//  event listener to the delete button
document.querySelector(".key-delete").addEventListener("click", handleDelete);

//  event listener to the enter button
document.querySelector(".key-enter").addEventListener("click", handleEnter);

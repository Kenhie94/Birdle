// Select all the keys and grid boxes
const keys = document.querySelectorAll(".key");
const gridBoxes = document.querySelectorAll(".grid-box");

// Game variables
let currentRow = 0;
let currentCol = 0;
const maxCols = 4;
const maxRows = 5;

// Function to handle key press (for letter keys)
function handleKeyPress(e) {
  const key = e.target.textContent.trim(); // Get the letter pressed

  
  if (currentCol < maxCols) {
    const currentIndex = currentRow * maxCols + currentCol; 
    gridBoxes[currentIndex].textContent = key; // Display the letter 
    currentCol++; // Move to the next column
  }
}

// Function to handle the delete button
function handleDelete() {
  if (currentCol > 0) {
    currentCol--; 
    const currentIndex = currentRow * maxCols + currentCol; 
    gridBoxes[currentIndex].textContent = ""; // Clears the letter in the current box
  }
}

// Function to handle the enter button (to move to the next row)
function handleEnter() {

  if (currentCol === maxCols) {
    currentRow++; // Move to the next row
    currentCol = 0; // Reset to the first column of the new row

    // Prevent moving past the last row
    if (currentRow >= maxRows) {
      currentRow = maxRows - 1;
      
    }
  } 
}

// Attach event listeners to all letter keys
keys.forEach((key) => {
  key.addEventListener("click", handleKeyPress);
});

// Attach event listener to the delete button
document.querySelector(".key-delete").addEventListener("click", handleDelete);

// Attach event listener to the enter button
document.querySelector(".key-enter").addEventListener("click", handleEnter);
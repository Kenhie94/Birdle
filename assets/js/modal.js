// Get modal elements - How to Play
const howToPlayEl = document.getElementById("howToPlayEl");
const howToPlayBtn = document.getElementById("howToPlayBtn");
const howToPlayClose = document.getElementById("howToPlayClose"); // Unique ID for close button

// Open the modal
howToPlayBtn.onclick = function() {
    howToPlayEl.style.display = "block";
}

// Close the modal
howToPlayClose.onclick = function() {
    howToPlayEl.style.display = "none";
}

// Close modal when user clicks outside of it
window.onclick = function(event) {
    if (event.target == howToPlayEl) {
        howToPlayEl.style.display = "none";
    }
}

// Get modal elements - Stats
const statsEl = document.getElementById("statsEl");
const statsBtn = document.getElementById("statsBtn");
const statsClose = document.getElementById("statsClose"); // Unique ID for close button

// Open the modal
statsBtn.onclick = function() {
    statsEl.style.display = "block";
}

// Close the modal
statsClose.onclick = function() {
    statsEl.style.display = "none";
}

// Close modal when user clicks outside of it
window.onclick = function(event) {
    if (event.target == statsEl) {
        statsEl.style.display = "none";
    }
}


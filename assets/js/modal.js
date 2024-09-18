// Get modal elements - How to Play
const howToPlayEl = document.getElementById("howToPlayEl");
const howToPlayBtn = document.getElementById("howToPlayBtn");
const howToPlayClose = document.getElementById("howToPlayClose"); // Unique ID for close button

// Get modal elements - Stats
const statsEl = document.getElementById("statsEl");
const statsBtn = document.getElementById("statsBtn");
const statsClose = document.getElementById("statsClose"); // Unique ID for close button

// Event Listeners for the stats and how to play button
howToPlayBtn.addEventListener("click", function() {
  statsEl.style.display = "none"
  howToPlayEl.style.display = "block"
});

statsBtn.addEventListener("click", function() {
  howToPlayEl.style.display = "none"
  statsEl.style.display = "block"
})

// Close the How to Play modal
howToPlayClose.onclick = function() {
    howToPlayEl.style.display = "none";
}

// Close the Stats modal
statsClose.onclick = function() {
  statsEl.style.display = "none";
}

// Close modals when the user clicks outside of them
window.onclick = function(event) {
    if (event.target == howToPlayEl) {
        howToPlayEl.style.display = "none";
    }
    if (event.target == statsEl) {
        statsEl.style.display = "none";
    }
}

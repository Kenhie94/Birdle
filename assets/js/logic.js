// Array 
// with 200 4-letter words
const wordPool = [
  "come", "bell", "bear", "play", "sing", "bird", "bean", "game", "rice", "four",
    "five", "tree", "keep", "dark", "moon", "cool", "blue", "read", "take", "kind",
    "ball", "star", "gold", "hill", "time", "fire", "line", "ring", "word", "milk",
    "wind", "snow", "cold", "rose", "warm", "boat", "fish", "pack", "coat", "jump",
    "desk", "work", "desk", "lamp", "bath", "rain", "book", "shoe", "food", "yard",
    "slow", "fast", "hand", "clay", "stay", "coat", "rock", "town", "road", "hope",
    "door", "shop", "wine", "flag", "cake", "plan", "wash", "lady", "king", "wolf",
    "gear", "dove", "sand", "ship", "neck", "long", "high", "heat", "loud", "lead",
    "talk", "full", "drop", "luck", "golf", "tall", "mood", "soup", "dust", "lake",
    "pain", "snow", "gale", "horn", "path", "shop", "mail", "seed", "wave", "dawn",
    "hurt", "hunt", "fade", "note", "card", "food", "mint", "tool", "good", "bark",
    "move", "luck", "stop", "list", "home", "sing", "land", "walk", "lift", "mark",
    "side", "jazz", "feel", "lost", "bank", "tone", "zoom", "fold", "root", "bell",
    "beer", "rock", "head", "calm", "wind", "flow", "seat", "gift", "crop", "luck",
    "wine", "fair", "call", "week", "race", "song", "belt", "beat", "jump", "help",
    "life", "coin", "spin", "tune", "west", "year", "zone", "flip", "mask", "peer",
    "task", "safe", "neck", "yard", "beef", "kite", "pear", "line", "pool", "rule",
    "spot", "chip", "risk", "cafe", "nest", "tide", "thin", "palm", "coat", "bend",
    "wild", "camp", "face", "mine", "park", "ring", "song", "lamp", "leaf", "heat",
    "boot", "plot", "beer", "wild", "lamp", "tray", "pool", "desk", "fool", "tent",
    "dust", "rock", "fade", "cage", "hurt", "root", "kite", "menu", "sail", "bake",
    "star", "golf", "quiz", "rope", "safe", "term", "card", "grow", "blue", "unit"
];
// Array
// empty array to store currentWord objects
const gameArray = []

// Function 
// that will return a random word within the wordPool array
function wordGenerate() {
  const currentGame = {}
  const randomIndex = Math.floor(Math.random() * wordPool.length);
  currentGame.currentWord = wordPool[randomIndex];
  currentGame.currentSplitWord = currentWord.split('');
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
  const targetWord = wordPool[Math.floor(Math.random() * wordPool.length)]
  const targetSplitWord = targetWord.split('')
  let letterChoice = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let count = 0;
  for(let i = 0; i < targetSplitWord.length; i++) {
    const letter = targetSplitWord[i]
    if (letterChoice.includes(letter)) {
      count++
    }
  }
  console.log(count)
  console.log(letterChoice)
  console.log(targetWord)
  console.log(targetSplitWord)
}

birdleGame()
// --- Global State Variables ---
let score1 = 0;
let score2 = 0;
let currentTeam = 1; // 1 for Team 1, 2 for Team 2
let timeLeft = 60;
let timerInterval;
let passesUsed = 0;
let gameRunning = false;

// --- DOM Elements ---
const startButton = document.getElementById('startButton');
const correctButton = document.getElementById('correctButton');
const passButton = document.getElementById('passButton');
const tabooButton = document.getElementById('tabooButton');
const currentWordDisplay = document.getElementById('currentWord');
const forbiddenWordsDisplay = document.getElementById('forbiddenWords');
const timerDisplay = document.getElementById('timerDisplay');
const score1Display = document.getElementById('score1');
const score2Display = document.getElementById('score2');
const currentTeamDisplay = document.getElementById('currentTeamDisplay');
const passCountDisplay = document.getElementById('passCount');

// --- Game Functions ---

/**
 * Gets a new, unused word from the words array.
 */
function getNewWord() {
    let selectedDb = document.querySelector('input[name="dbCategory"]:checked').value;
    let words = data[selectedDb];
    if (Object.entries(words).length === 0) {
        alert("All words used! Refresh the page to start from the beginning.");
    }

    let keys = Object.keys(words);
    let randomKey = keys[Math.floor(Math.random() * keys.length)];
    let forbidden_words = words[randomKey];

    currentWordDisplay.textContent = randomKey;
    forbiddenWordsDisplay.innerHTML = forbidden_words.map(w => `<span class="badge bg-danger mx-1">${w}</span>`).join('');
    delete words[randomKey]; // Prevent using same word twice
}

/**
 * Starts the 60-second timer and begins the turn.
 */
function startTurn() {
    if (gameRunning) return; // Prevent multiple starts

    gameRunning = true;
    timeLeft = 60;
    passesUsed = 0;
    passCountDisplay.textContent = 2 - passesUsed;
    timerDisplay.textContent = timeLeft;

    // Enable game buttons
    correctButton.disabled = false;
    passButton.disabled = false;
    tabooButton.disabled = false;
    startButton.disabled = true;

    getNewWord();

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 10) {
            timerDisplay.classList.add('text-warning'); // Visual cue for low time
        } else {
            timerDisplay.classList.remove('text-warning');
        }

        if (timeLeft <= 0) {
            endTurn();
        }
    }, 1000);
}

/**
 * Ends the current turn and switches to the next team.
 */
function endTurn() {
    clearInterval(timerInterval);
    gameRunning = false;

    // Disable game buttons
    correctButton.disabled = true;
    passButton.disabled = true;
    tabooButton.disabled = true;
    startButton.disabled = false;

    // Reset displays
    currentWordDisplay.textContent = "TURN ENDED";
    forbiddenWordsDisplay.textContent = "";
    timerDisplay.classList.remove('text-warning');

    // Switch team
    currentTeam = currentTeam === 1 ? 2 : 1;
    currentTeamDisplay.textContent = `Team ${currentTeam}`;

    alert(`Time's up! Team ${currentTeam} is up next.`);
}

/**
 * Handles a successful guess or a word being passed.
 * @param {boolean} isCorrect - true for correct, false for taboo.
 */
function handleWordAction(isCorrect) {
    if (!gameRunning) return;

    if (isCorrect) {
        if (currentTeam === 1) {
            score1++;
            score1Display.textContent = score1;
        } else {
            score2++;
            score2Display.textContent = score2;
        }
        getNewWord(); // Get next word on success
    } else {
        // Taboo action: -1 point and get new word
        if (currentTeam === 1) {
            score1 = score1 - 1;
            score1Display.textContent = score1;
        } else {
            score2 = score2 - 1;
            score2Display.textContent = score2;
        }
        getNewWord(); // Get next word on Taboo
    }
}

/**
 * Handles the pass functionality with a limit.
 */
function handlePass() {
    if (!gameRunning) return;

    if (passesUsed < 2) {
        passesUsed++;
        passCountDisplay.textContent = 2 - passesUsed;
        getNewWord();
    } else {
        alert("Maximum passes used! You must either guess the word or take a Taboo.");
        passButton.disabled = true; // Disable after max passes
    }
}


// --- Event Listeners ---
startButton.addEventListener('click', startTurn);
correctButton.addEventListener('click', () => handleWordAction(true));
tabooButton.addEventListener('click', () => handleWordAction(false));
passButton.addEventListener('click', handlePass);

// Initial state setup (ensure initial pass count is correct)
passCountDisplay.textContent = 2 - passesUsed;

// build button
function populateDbButtons() {
    const container = document.getElementById("dbButtonGroup");
    container.innerHTML = ""; // clear existing
    const keys = Object.keys(data); // array of strings

    keys.forEach((key, index) => {
        const input = document.createElement("input");
        input.type = "radio";
        input.className = "btn-check";
        input.name = "dbCategory";
        input.id = key;        // use the key as id
        input.value = key;     // use the key as value
        if (index === 0) input.checked = true; // first one checked

        const label = document.createElement("label");
        label.className = "btn btn-outline-primary";
        label.htmlFor = key;
        label.textContent = key; // display the key as label

        container.appendChild(input);
        container.appendChild(label);
    });
}

// Call on load
populateDbButtons();
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingBtn = document.getElementById("setting-btn");
const settings = document.getElementById("setting");
const settingsForm = document.getElementById("setting-form");
const difficultySelect = document.getElementById("difficulty");
const words = ["open the bottle", "the book is easy", "the dog is white", "the room is hot", "the sun is up"];
let randomWord;
let score = 0;

text.focus();



function getRandomWord() {
    return Math.floor(Math.random() * words.length);
}

function addWordToDOM() {
    rnd = getRandomWord();
    source = words[rnd] + ".mp3";
    document.getElementById("my-audio").setAttribute('src', source);
}
addWordToDOM();

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
    if (score == 5) {
        gameOver();
    }
}

function gameOver() {
    endgameEl.innerHTML = `
        <h1> GREAT EFFORT!</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()" >Restart</button>
        <button  href="https://englishbolega.com/games/" >PLAY MORE</button>
    `;
    endgameEl.style.display = "flex";
}

text.addEventListener("input", (e) => {
    const insetedText = e.target.value;
    if (insetedText === words[rnd]) {
        addWordToDOM();
        updateScore();

        e.target.value = "";
    }
});

settingBtn.addEventListener("click", () => settings.classList.toggle("hide"));

settingsForm.addEventListener("change", (e) => {
    difficulty = e.target.value;
    localStorage.setItem("difficulty", difficulty);
});

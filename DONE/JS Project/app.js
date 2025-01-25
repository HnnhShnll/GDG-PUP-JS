let startButton = document.getElementById("startButton");
let userChoiceDisplay = document.querySelector("#userChoice");
let computerChoiceDisplay = document.querySelector(`#computerChoice`);
let resultDisplay = document.querySelector(`#result`);
let winsDisplay = document.querySelector(`#wins`);
let lossesDisplay = document.querySelector(`#losses`);
let tiesDisplay = document.querySelector(`#ties`);

let userChoice = "";
let wins = 0;
let losses = 0;
let ties = 0;
const choices = ["rock", "paper", "scissors"];

document
  .getElementById("rock")
  .addEventListener("click", () => selectChoice("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => selectChoice("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => selectChoice("scissors"));
document.getElementById("startButton").addEventListener("click", playGame);
document.getElementById("resetButton").addEventListener("click", resetGame);

function selectChoice(choice) {
  userChoice = choice;
  userChoiceDisplay.innerHTML = `<img src="assets/icon-${choice}.png" alt="${choice}" class='choice--img'/>`;
  startButton.disabled = false;
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "draw";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function updateScore(result) {
  if (result === "win") {
    wins++;
    winsDisplay.textContent = wins;
  } else if (result === "lose") {
    losses++;
    lossesDisplay.textContent = losses;
  } else {
    ties++;
    tiesDisplay.textContent = ties;
  }
}

function playGame() {
  if (!userChoice) {
    resultDisplay.textContent = "Please choose an option first!";
    return;
  }
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  computerChoiceDisplay.innerHTML = `<img src="assets/icon-${computerChoice}.png" alt="${computerChoice}" class='choice--img'/>`;

  if (result === "draw") {
    resultDisplay.textContent = "It's a Draw!";
  } else if (result === "lose") {
    resultDisplay.textContent = "You Lose...";
  } else if (result === "win") {
    resultDisplay.textContent = "You Win!";
  }
  updateScore(result);
}

function resetGame() {
  userChoice = "";
  userChoiceDisplay.innerHTML =
    '<img src="assets/icon-user.png" alt="user" class="choice--img">';
  computerChoiceDisplay.innerHTML =
    '<img src="assets/icon-computer.png" alt="computer" class="choice--img">';
  resultDisplay.textContent = "Choose your weapon!";
  wins = 0;
  losses = 0;
  ties = 0;

  winsDisplay.textContent = wins;
  lossesDisplay.textContent = losses;
  tiesDisplay.textContent = ties;
  startButton.disabled = true;
}

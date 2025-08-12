const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerchoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = "";

  if (playerchoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerchoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You Win!" : "You Loose";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You Win!" : "You Loose";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You Win!" : "You Loose";
        break;
    }
  }

  playerDisplay.textContent = `Player: ${playerchoice}`;
  computerDisplay.textContent = `Player: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "You Win!":
      resultDisplay.classList.add("greenText");
      break;
    case "You Loose":
      resultDisplay.classList.add("redText");
      break;
  }
}

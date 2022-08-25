const computerChoiceDisplay = document.getElementById("comp-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const buttons = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    userChoice = e.target.id;
    console.log(userChoice);
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  });
});

function generateComputerChoice() {
  const random = Math.floor(Math.random() * 3) + 1;

  switch (random) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "scissors";
      break;
    case 3:
      computerChoice = "paper";
      break;
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "berabere";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "kaybettin :(";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "Sen Kazandın :)";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "kaybettin :(";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "Sen Kazandın :)";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "kaybettin :(";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "Sen Kazandın :)";
  }
  resultDisplay.innerHTML = result;
}

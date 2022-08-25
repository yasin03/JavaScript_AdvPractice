const userChoiceDisplay = document.createElement("h2");
const computerChoiceDisplay = document.createElement("h2");
const resultDisplay = document.createElement("h2");

const gameDisplay = document.getElementById("game");

gameDisplay.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

let userChoice;
let computerChoice;

const choice = ["Scissors", "Rock", "Paper"];

/* Butona tıklandığında çalışacak method */

const handleClick = (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = `User Choice : ${userChoice}`;
  generateComputerChoice();
  getResult();
};

/* Computer seçimi */

const generateComputerChoice = () => {
  const randomChoice = choice[Math.floor(Math.random() * choice.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = `Computer Choice : ${randomChoice}`;
};

/* Butonları ekleme */

for (let i = 0; i < choice.length; i++) {
  const btn = document.createElement("button");
  btn.id = choice[i];
  btn.innerHTML = choice[i];
  btn.addEventListener("click", handleClick);
  gameDisplay.appendChild(btn);
}

/* Sonuçları değerlendirme */

const getResult = () => {
  switch (userChoice + computerChoice) {
    case "ScissorsPaper":
    case "RockScissors":
    case "PaperRock":
      resultDisplay.innerText = "SEN KAZANDIN :)";
      break;
    case "PaperScissors":
    case "ScissorsRock":
    case "RockPaper":
      resultDisplay.innerText = "KAYBETTİN :(";
      break;
    case "PaperPaper":
    case "ScissorsScissors":
    case "RockRock":
      resultDisplay.innerText = "BERABERESİNİZ!";
      break;
  }
};

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let scoreDiv = document.getElementById("score");
let resultDiv = document.getElementById("result");

let playerSelection = document
  .querySelector("#choices")
  .addEventListener("click", (e) => {
    if (e.target.value != (undefined || null)) {
      gameRound(e.target.value, computerPlay());
      updateScoreDiv();
      if (playerScore === 5) {
        alert("you won the game!");
        playerScore = 0;
        computerScore = 0;
        updateScoreDiv();
        resultDiv.innerText = "";
      } else if (computerScore === 5) {
        alert("Im sorry you lost!");
        playerScore = 0;
        computerScore = 0;
        updateScoreDiv();
        resultDiv.innerText = "";
      }
    }
  });
function gameRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    resultDiv.innerText = "Rock breaks scissors! Player wins!";
    return (playerScore += 1);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    resultDiv.innerText = "Paper beats rock! Player wins!";
    return (playerScore += 1);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    resultDiv.innerText = "scissors cut paper! Player wins!";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    resultDiv.innerText = "Rock breaks scissors! Computer wins!";
    return (computerScore += 1);
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    resultDiv.innerText = "Paper beats rock! Computer wins!";
    return (computerScore += 1);
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    resultDiv.innerText = "scissors cut paper! Computer wins!";
    return (computerScore += 1);
  } else {
    resultDiv.innerText = `player chose ${playerSelection} and computer chose ${computerSelection}. It's a tie!`;
  }
}

function updateScoreDiv() {
  scoreDiv.innerText = `Current score is: You ${playerScore} - Computer ${computerScore}`;
}

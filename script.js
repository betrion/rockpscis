/*


*/

function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
let playerScore = 0;
let computerScore = 0;
let computerSelection;

let playerSelection;
function gameRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("Rock breaks scissors! Player wins!");
    return (playerScore += 1);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("Paper beats rock! Player wins!");
    return (playerScore += 1);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("scissors cut paper! Player wins!");
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log("Rock breaks scissors! Computer wins!");
    return (computerScore += 1);
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    console.log("Paper beats rock! Computer wins!");
    return (computerScore += 1);
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    console.log("scissors cut paper! Computer wins!");
    return (computerScore += 1);
  } else {
    console.log(
      `player chose ${playerSelection} and computer chose ${computerSelection}. It's a tie!`
    );
  }
}

function game() {
  computerSelection = computerPlay();
  console.log(computerSelection);
  playerSelection = window.prompt("Rock, paper or scissors?").toLowerCase();
  gameRound(playerSelection, computerSelection);
  console.log(
    `current score is: player - ${playerScore}, computer - ${computerScore}`
  );
}

while (computerScore < 5 && playerScore < 5) {
  game();
}
if (playerScore < computerScore) {
  console.log("Computer won the game!");
} else {
  console.log("you won the game!");
}

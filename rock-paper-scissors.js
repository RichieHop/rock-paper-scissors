
let computerResults = "";
let humanResults = "";
let computerScore = 0;
let humanScore = 0;
let myResults = "";

function getComputerChoice() {
  let computerChoice = getRandomIntInclusive(1, 3);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Enter either Rock, Paper or Scissors");
  return humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  let randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  let computerChoice = "";

  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
        return "Scissors";
    } else {
        return "Paper";}
}

  function getResultAndScore(computerChoice, humanChoice) {
    let humanScore =0;
    let computerScore = 0;
    let result = "";

    if (computerChoice == "Rock" && humanChoice == "Rock") {
      result = "Draw - you both chose rock"; computerScore = 0; humanScore = 0
    } else if (computerChoice == "Rock" && humanChoice == "Scissors") {
      result = "Computer wins! Rock blunts scissors"; computerScore = 1; humanScore = 0
      } else if (computerChoice == "Rock" && humanChoice == "Paper") {
        result = "You win! Paper wraps rock"; computerScore = 0; humanScore = 1
        } 

    if (computerChoice == "Paper" && humanChoice == "Paper") {
      result = "Draw - you both chose paper"; computerScore = 0; humanScore = 0
    } else if (computerChoice == "Paper" && humanChoice == "Rock") {
      result = "Computer wins! Paper wraps rock"; computerScore = 1; humanScore = 0
      } else if (computerChoice == "Paper" && humanChoice == "Scissors") {
        result = "You win! Scissors cut paper"; computerScore = 0; humanScore = 1
        } 

    if (computerChoice == "Scissors" && humanChoice == "Scissors") {
      result = "Draw - you both chose scissors"; computerScore = 0; humanScore = 0
    } else if (computerChoice == "Scissors" && humanChoice == "Paper") {
      result = "Computer wins! Scissors cut paper"; computerScore = 1; humanScore = 0
      } else if (computerChoice == "Scissors" && humanChoice == "Rock") {
        result = "You win! Rock blunts scissors"; computerScore = 0; humanScore = 1
        } 

    return {
      result,
      computerScore,
      humanScore
    }
  }

for (let loop = 1; loop < 6; loop++) {;
  let computerChoice = (getComputerChoice());
  let humanChoice = (getHumanChoice());

  let result = (getResultAndScore(computerChoice, humanChoice));
  computerScore = computerScore + result.computerScore;
  humanScore = humanScore + result.humanScore;
  
  computerResults = computerResults + computerChoice + "\n"; 
  humanResults = humanResults + humanChoice + "\n"; 
  myResults = myResults + result.result + "\n"; 

}

alert ("Computer choices are: " + computerResults + "\nYour choices are: " + humanResults);
alert ("Results are: "  + "\n" + myResults + "\n" + "Scores are: " + computerScore + " - " + humanScore);

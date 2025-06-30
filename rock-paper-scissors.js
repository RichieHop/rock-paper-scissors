let computerScore = 0;
let humanScore = 0;
let currentRound = 0;

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  let randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum and the minimum are inclusive

  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
        return "Scissors";
    } else {
        return "Paper";}
}

function getComputerChoice() {
  let computerChoice = getRandomIntInclusive(1, 3);
  return computerChoice;
}
  function getResultAndScore(computerChoice, humanChoice) {

    let humanScore =0;
    let computerScore = 0;
    let result = "";

    if (computerChoice == "Rock" && humanChoice == "Rock") {
      result = "Draw - you both chose rock"; computerScore = 0; humanScore = 0;
    } else if (computerChoice == "Rock" && humanChoice == "Scissors") {
      result = "Computer wins! Rock blunts scissors"; computerScore = 1; humanScore = 0;
      } else if (computerChoice == "Rock" && humanChoice == "Paper") {
        result = "You win! Paper wraps rock"; computerScore = 0; humanScore = 1;
        } 

    if (computerChoice == "Paper" && humanChoice == "Paper") {
      result = "Draw - you both chose paper"; computerScore = 0; humanScore = 0;
    } else if (computerChoice == "Paper" && humanChoice == "Rock") {
      result = "Computer wins! Paper wraps rock"; computerScore = 1; humanScore = 0;
      } else if (computerChoice == "Paper" && humanChoice == "Scissors") {
        result = "You win! Scissors cut paper"; computerScore = 0; humanScore = 1;
        } 

    if (computerChoice == "Scissors" && humanChoice == "Scissors") {
      result = "Draw - you both chose scissors"; computerScore = 0; humanScore = 0;
    } else if (computerChoice == "Scissors" && humanChoice == "Paper") {
      result = "Computer wins! Scissors cut paper"; computerScore = 1; humanScore = 0;
      } else if (computerChoice == "Scissors" && humanChoice == "Rock") {
        result = "You win! Rock blunts scissors"; computerScore = 0; humanScore = 1;
        } 

    return {
      result,
      computerScore,
      humanScore
    }
  }

const choicesDetail = document.querySelector(".choicesDetail");
const innerResultsDetail = document.querySelector(".innerResultsDetail");
const scoresDetail = document.querySelector(".scoresDetail");
const roundDetail = document.querySelector(".roundDetail");

// Get the human selection.
const buttons = document.querySelectorAll("button");

// Use the .forEach method to iterate through each button....
buttons.forEach((button) => {
  // .... and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    currentRound == ++currentRound;
    const computerChoice = (getComputerChoice());
    const humanChoice = button.id;
    const result = (getResultAndScore(computerChoice, humanChoice));
    computerScore = computerScore + result.computerScore;
    humanScore = humanScore + result.humanScore;

    // Display the round number, result and score in the resultsDetail div.
    roundDetail.textContent = "Round " + currentRound;
    choicesDetail.textContent = "Computer choice is " + computerChoice + ", your choice is " + humanChoice;
    innerResultsDetail.textContent = "Result: "  + result.result; 
    scoresDetail.textContent = "Scores: " + computerScore + " - " + humanScore;

    // Check if either the computer or human has reached 5 points; if so then end the game.
    if (computerScore == 5) {
      // Get the modal
      var modal = document.getElementById("myModal");
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      document.getElementById('modalText').innerText = "Game over, computer wins. Close this window to start a new game.";
      modal.style.display = "block";
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
        computerScore = 0; humanScore = 0; currentRound=0;
        roundDetail.textContent = "";
        choicesDetail.textContent = "";
        innerResultsDetail.textContent = ""; 
        scoresDetail.textContent = "";  
      }
    
    } else if (humanScore == 5) {
      // Get the modal
      var modal = document.getElementById("myModal");
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      document.getElementById('modalText').innerText = "Game over, you win! Close this window to start a new game.";
      modal.style.display = "block";
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
        computerScore = 0; humanScore = 0; currentRound=0;
        roundDetail.textContent = "";
        choicesDetail.textContent = "";
        innerResultsDetail.textContent = ""; 
        scoresDetail.textContent = ""; 
      }
    }
  
  });
});

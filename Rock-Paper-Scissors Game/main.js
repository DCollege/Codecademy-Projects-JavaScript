const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

 //checking if user choice is 'rock', 'paper', 'scissors' or 'bomb'  
//If not, there'll be an error message printed to the console
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;  
} else { 
  console.log('Error!');
} 
}

const getComputerChoice = () => { randomNumber = Math.floor(Math.random() * 3 )
switch (randomNumber) {
  case 0:
    return 'rock';
  case 1: 
    return 'paper';
  case 2:
      return 'scissors';

}}

//determining who the winner is: comparing userChoice vs. computerChoice.
const determineWinner = (userChoice, computerChoice) => {
  
if (userChoice === 'bomb') {
  return 'You won!';
}  
  
if (userChoice === computerChoice) {
    return 'Tie game.';
  }


if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}

if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}

if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}}

//starting the game. log the results: userChoice and computer Choice
const playGame = () => {
  const userChoice = 
getUserChoice('rock');
  const computerChoice = 
getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

//who won?
console.log(determineWinner(userChoice, computerChoice));
};

//starting the game
playGame();                        

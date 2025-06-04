const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');

let targetNumber;
let attempts = 0;

const maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
//--------------------------------------STRETCH GOAL:
//LIMITING THE INPUT TO NUMBERS BETWEEN 1 AND 99-----
  if((guess >= 1) && (guess <= 99)){
    //---------------------------------LOGIC ERROR FOUND:
    //UPDATE # ATTEMPS AFTER INPUT VALIDATIONS TO AVOID COUNTING INVALID ATTEMPS
    attempts = attempts + 1;

    hideAllMessages();

    if (guess === targetNumber) {
      numberOfGuessesMessage.style.display = '';
      numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

      correctMessage.style.display = '';

      submitButton.disabled = true;
      guessInput.disabled = true;
    }

    if (guess !== targetNumber) {
      if (guess < targetNumber) {
          tooLowMessage.style.display = '';
        } else {
          //---------------------------------LOGIC ERROR FOUND:
          //tooLowMessage.style.display = '';
          tooHighMessage.style.display = '';
        }

      const remainingAttempts = maxNumberOfAttempts - attempts;

      numberOfGuessesMessage.style.display = '';
//--------------------------------------STRETCH GOAL:
//HANDLING PLURAL AND SINGULAR IN MESSAGE------------
    // IF NUMBER OF ATTEMPTS IS DIFFERENT THAN 1 USE PLURAL
    if(remainingAttempts !== 1){
        numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
      }
    // OTHERWISE USE SIGULAR  
      else{
        numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guess remaining`;
      }
    }

//--------------------------------SINTAX ERROR FOUND:
  //if (attempts ==== maxNumberOfAttempts) {
    if(attempts === maxNumberOfAttempts) {
      submitButton.disabled = true;
      guessInput.disabled = true;
    }
    guessInput.value = '';
    resetButton.style.display = '';
  } 
  else{
    alert("You should enter a value between 1 and 99");
    // RESET USER-ENTERED VALUE
    guessInput.value = '';
  }

  
}

function hideAllMessages() {
//---------------------------------LOGIC ERROR FOUND:
//ElementIndex must be strictly minor than lenght because arrays start counting at 0
//for (let elementIndex = 0; elementIndex <= messages.length; elementIndex++)

for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = 'none';
  }
  
}

//--------------------------------SINTAX ERROR FOUND:
//funtion setup() {
function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

// Reset number of attempts
  //---------------------------------LOGIC ERROR FOUND:
  // CANNOT MODIFY A CONST VARIABLE
  // maxNumberOfAttempts = 0;

  //---------------------------------LOGIC ERROR FOUND:
  // TO RESET # ATTEMPTS MODIFY ATTEMPS VARIABLE
  attempts = 0;
  
  // Enable the input and submit button
  //--------------------------------SINTAX ERROR FOUND:
  // submitButton.disabeld = false;
  submitButton.disabled = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = 'none';
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();

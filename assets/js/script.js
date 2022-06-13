let numbers = document.getElementsByClassName('multiplier');
let multiplier1 = document.getElementById('operand1');
let multiplier2 = document.getElementById('operand2');



//start the game when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    //Get the array from 1 to 10 of divs with class 'operand'
    // let numbers = document.getElementsByClassName('multiplier');
    for (let number of numbers) {
        number.addEventListener('click', showMult1);
    }
   
});

/**
 * function checks which element is clicked and 
 *assigns its value to the variable to  the first multiplier, 
 * then outputs Multiplier2 and calculate result
 */
function showshowMult1() {}

//outputs  Multiplier2
function showMult2() {}

//calculates correct multiplication result
function calcResult() {}

// function which outputs random answers for user
function showAnswers() {}


//checks which button with answer is clicked
function checkAnswer() {}


/**
 * Gets the current score and increments it by 1
 */
function countScores() {}


/**
 * Gets incorrect answers from the DOM and increments it by 1
 */
function countErrors() {}
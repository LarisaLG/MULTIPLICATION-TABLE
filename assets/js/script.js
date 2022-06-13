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
function showshowMult1() {
    let num1 = parseInt(this.innerHTML);
    //console.log(num1);

    //assigns choosen number value to the first Multiplier
    //let multiplier1 = document.getElementById('operand1'); 
    multiplier1.innerHTML = num1;
    showMult2();
}


//outputs  Multiplier2
function showMult2() {
    let num2 = 1;
    function delay() {
        multiplier2.innerHTML = num2;
        console.log("Multiplier2 is " + multiplier2.innerHTML);
        
        num2++;

        //checkAnswer();   check which button is clicked
        if(num2 <= numbers.length ) {
            setTimeout(delay, 3000);
        }
    }
    delay();
    }


//calculates correct multiplication result
function calcResult() {
    num1 = parseInt(multiplier1.innerHTML);
    num2 = parseInt(multiplier2.innerHTML);
    return num1 * num2;
}


// function which outputs random answers for user
function showAnswers() {}


//checks which button with answer is clicked
function checkAnswer() {}


/**
 * Gets the current score and increments it by 1
 */
function countScores() {
    let score = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++score;
}


/**
 * Gets incorrect answers from the DOM and increments it by 1
 */
function countErrors() {
    let score = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++score;
}
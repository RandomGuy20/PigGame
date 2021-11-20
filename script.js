'use strict';

//#region Selecting Elements

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");


//#endregion

//#region Scoring Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden"); 

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//#endregion

const switchPlayer = function () 
{  
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}



//#region Dice Rolling Functionality
buttonRoll.addEventListener("click",function()
{
    if(playing)
    {
        //1. generatre random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        //2. Display the dice
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;

        //3. Check to see if it rolled a 1
        if (dice !== 1) 
        {
            // add Dice to the current Score  
            currentScore += dice;
            //current0El.textContent = currentScore;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else
        {
            // Switch To next player
            switchPlayer();
        }
    }
});

//#endregion

buttonHold.addEventListener("click",function()
{
    if(playing)
    {
        //1. Add current score to active player score
        scores[activePlayer] += currentScore;   
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // 2. Check if score is 100 
        if(scores[activePlayer] >= 20)
        {
            playing = false;
            diceEl.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        }
        else
        {
            switchPlayer();
        }
    }

});

buttonNew.addEventListener("click",function()
{

});




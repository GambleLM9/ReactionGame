let theButton = document.getElementById("buttonHolder")//DOM for the Button Holder
let timer = '' //Variable for the timer
let scoreboard = document.getElementById('counter')//DOM for the scoreboard 
let counter = 0//Variable for the score counter
function beginGame(){//Begins the game on activation
    console.log("Game started")//LOGGING: Logs the message in the console, signaling that the game has began
    timerStart()//Activates the timerStart function
}
function timerStart(){//Starts the timer on activation
    let interval = Math.floor(Math.random() * (61 - 1)) + 1//Picks a random number between 60 and 1, and rounds it down.
    console.log(interval.toFixed() + " Seconds")//LOGGING: Logs the randomized time on the console
    let timervalue = interval * 1000//Multiplies the random number by 1000 to convert it into miliseconds.
    console.log(timervalue)//LOGGING: Logs the result of timervalue in the console.
    timer = setTimeout(displayButton, timervalue.toFixed()) //Sets a time out, activating the displayButton function after the randomized timervalue has passed.
}
function displayButton(){//Displays the button on activation
    //Sets the DOM for the Button holder equivalent to the following code, generating the button.
    theButton.innerHTML += `
    <button class="t5button" onclick="buttonClick()">Click Me!</button>
    `
    timer = setTimeout(gameLost, 250)//Sets an activation timer for 250 miliseconds, equating to a quarter of a second. After that time has passed, activate gameLost function
}
function gameLost(){//Displays the game over message on activation
    theButton.innerHTML = ''//Clears the DOM for the Button holder, making the button disappear.
    console.log("Oops! Game over!")//LOGGING: Logs the message in the console to signal a game over
    //Sets the DOM for the Button holder equivalent to the following code, generating a game over message.
    theButton.innerHTML += `
        <div class="gameover">
            <h2>Oops! Game Over!</h2>
            <button class="tryagain" onclick="tryAgain()">Try Again?</button>
        </div>
    `
}
function buttonClick(){//Clears the activation timer and awards a point upon activation
    clearTimeout(timer)//Clear the activation timer
    console.log("Congrats!")//LOGGING: Logs the message in the console, signaling that the round has been completed.
    theButton.innerHTML = ''//Clears the DOM for the Button holder, making the button disappear.
    counter++//Increments the score count by 1
    scoreboard.innerHTML = counter//Sets the DOM for the scoreboard equal to the value of the counter
    timerStart()//Activates the timerStart() function to begin the game again
}
function tryAgain(){//Resets the game and restarts it upon activation
    theButton.innerHTML = ''//Clears the DOM for the Button holder, making the button disappear.
    counter = 0//Resets the score to 0
    console.log(counter, "Counter")//LOGGING: Logs the value of the counter to confirm a reset
    scoreboard.innerHTML = counter//Sets the DOM for the scoreboard equal to the value of the counter, which should be 0
    timerStart()//Activates the timerStart() function to begin the game again
}
timerStart()//Automatically activates the timerStart function to begin the game.
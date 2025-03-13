let theButton = document.getElementById("buttonHolder")//DOM for the Button Holder
let timer = ''//Variable for the timer
let scoreboard = document.getElementById('counter')//DOM for the scoreboard 
let counter = 0//Variable for the score counter
let cheeseCounter = 0 //Variable for the anti-cheat
let cheeseTimer = ''//Variable for the anti-cheat timer
function beginGame(){//Begins the game on activation
    console.log("Game started")//LOGGING: Logs the message in the console, signaling that the game has began
    timerStart()//Activates the timerStart function
}
function timerStart(){
    let interval = Math.floor(Math.random() * (31 - 1)) + 1//Picks a random number between 30 and 1, and rounds it down.
    console.log(interval.toFixed() + " Seconds")//LOGGING: Logs the randomized time on the console
    let timervalue = interval * 1000//Multiplies the random number by 1000 to convert it into miliseconds.
    console.log(timervalue)//LOGGING: Logs the result of timervalue in the console.
    timer = setTimeout(displayButton, timervalue.toFixed())//Sets a time out, activating the displayButton function after the randomized timervalue has passed.
}
function displayButton(){//Displays the button on activation
    //Sets the DOM for the Button holder equivalent to the following code, generating the button.
    theButton.innerHTML += `
    <button class="t4button" onclick="ignoreTrap(), buttonClick()">Click Me!</button>
    `
    timer = setTimeout(gameLost, 500)//Sets an activation timer for 2000 miliseconds, equating to half a second. After that time has passed, activate gameLost function
}
function gameLost(){//Displays the game over message on activation
    theButton.innerHTML = ''//Clears the DOM for the Button holder, making the button disappear.
    console.log("Oops! Game over!")//LOGGING: Logs the message in the console to signal a game over
    //Sets the DOM for the Button holder equivalent to the following code, generating a game over message.
    theButton.innerHTML += `
        <div class="gameover">
            <h2>Oops! Game Over!</h2>
            <button class="tryagain" onclick="ignoreTrap(), tryAgain()">Try Again?</button>
        </div>
    `
}
function buttonClick(){//Clears the activation timer and awards a point upon activation
    clearTimeout(timer) //Clear the activation timer
    console.log("Congrats!")//LOGGING: Logs the message in the console, signaling that the round has been completed.
    theButton.innerHTML = ''//Clears the DOM for the Button holder, making the button disappear.
    counter++//Increments the score count by 1
    scoreboard.innerHTML = counter//Sets the DOM for the scoreboard equal to the value of the counter
    timerStart()//Activates the timerStart() function to begin the game again
}
function tryAgain(){ //Resets the game and restarts it upon activation
    theButton.innerHTML = ''//Clears the DOM for the Button holder, making the button disappear.
    counter = 0//Resets the score to 0
    console.log(counter, "Counter")//LOGGING: Logs the value of the counter to confirm a reset
    scoreboard.innerHTML = counter//Sets the DOM for the scoreboard equal to the value of the counter, which should be 0
    timerStart() //Activates the timerStart() function to begin the game again
}
function mouseTrap(){ //This is the game's anti-cheat system
    cheeseCounter++ //Adds 1 to the anti-cheat counter
    console.log('Cheesy', cheeseCounter) //LOGGING: Logs the current value of the anti-cheat counter
    if(cheeseCounter > 5){ //Checks if the anti-cheat counter exceeds 5
        console.log('Trap Activated!') //LOGGING: Logs the activation of the anti-cheat
        clearTimeout(timer) //Clears the current timer
        theButton.innerHTML='' //Clears the DOM for the Button holder, making the button disappear.
        //Sets the DOM for the Button holder equivalent to the following code, generating a pop up to call the player out for cheating
        theButton.innerHTML=`
        <div class="mouseTrap">
            <h3>You fell for the Mouse Trap!</h3>
            <p>Why would you go for the cheese, little mouse?</p>
        </div>
        `
        //The player cannot continue the game after this, forcing them to either return to home or reload the page to play again
    }
    cheeseTimer = setTimeout(avoidTrap, 5000) //Sets the anti-cheat timer for 5 seconds. After 5 seconds have passed, activates avoidTrap()
}
function avoidTrap(){ //Resets the anti-cheat counter
    cheeseCounter = 0 //Sets the anti-cheat counter to 0
}
function ignoreTrap(){ //Nullifes the effect of the anti-cheat counter
    cheeseCounter-- //Reduces the anti-cheat counter by 1, nullifying the effect of the mouseTrap function
}
timerStart() //Automatically activates the timerStart function to begin the game.
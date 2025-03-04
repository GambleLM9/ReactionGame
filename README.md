# Reaction Timing Game
## Description
An online web browser game that tests your reaction time across various difficulties with a simple task: click the button whenever it appears. It sounds easy, but it can get unexpectedly hard.
## How to play?
The instructions are listed in-game, but for a more detailed version:
1. Choose one of the four available tiers.
2. Wait at the screen for the button to appear. This can take anywhere from 1 second to 30, depending on your chosen tier.
3. When the button appears, click it!
4. Successfully clicking the button will increase your score by one. Failing to click the button will give you a game over.
5. If you get a game over, either try again by clicking on the titular button, or return to the home page to select another tier.
6. The game is endless, so see how high of a score you can get!
7. Remember: PATIENCE is key!
## Technologies Used:
- HTML5
- CSS3
- JavaScript
## Features:
- Fully randomized button timing
- Multiple Difficulties
- Replayable
- Keeps track of and displays score
## Files:
- index.html: The Home Page
- styles.css: Overall styles for whole website (This is not used much)
- tier1.html: The Game page for Tier 1
- script.js: The logic for Tier 1
- tier2.html: The Game page for Tier 2
- script2.js: The logic for Tier 2
- tier3.html: The Game page for Tier 3
- script3.js: The logic for Tier 3
- tier4.html: The Game page for Tier 4
- script4.js: The logic for Tier 4
- tier5.html: The Game page for **a secret**
- script5.js: The logic for a **secret**
## Example of Randomization Logic
```
function timerStart(){ 
    let interval = Math.floor(Math.random() * (11 - 5)) + 5
    console.log(interval.toFixed() + " Seconds") 
    let timervalue = interval * 1000 
    console.log(timervalue) 
    timer = setTimeout(displayButton, timervalue.toFixed())
}
```
### Created by: Gamble
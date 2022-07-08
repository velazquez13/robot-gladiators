//Game States
//"WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// also can log: console.log(playerName, playerAttack, playerHealth); 
//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
}

var enemyNames = [" Roborto ", " Amy Android ", " Robo Trumble "];
var enemyHealth = randomNumber(40, 60);
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function
var fight = function(enemyName) {
    //Alert players that they are starting the round
    while(playerHealth > 0 && enemyHealth > 0)
var promptFight = window.prompt( "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");

// if player choses to skip, stop loop
if (promptFight === " skip" || promptFight === " SKIP ") {
    //confirm player wants to skip
    var confirmSkip = window.confirm( "Are you sure you'd like to quit? ");
 
    //if yes (true), leave fight
    if(confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye! ");
    //subtract money from playerMoney for skipping
    playerMoney = Math.max(0, playerMoney - 10);
    console.log("playerMoney" , playerMoney);
    break;
    }
}

//remove enemy's health by subtracting the amount set in the playerAttack variable
//generate random damage value based on player's attack power
var damage = randomNumber(playerAttack - 3, playerAttack);

enemyHealth = Math.max(0, enemyHealth - damage);
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyNames + "has died!");
//award player money for winning
playerMoney = playerMoney + 20;
//leave while() loop since enemy is dead
    break;
} else {
    window.alert (enemyName + " still has " + enemyHealth + " health left. ");
}

//subtract the value of 'enemyAttck' for the value of 'playerHealth and use that result to update the value in the 'plyerHealth' variable
var damage = randomNumber(enemyAttack - 3, enemyAttack);

playerHealth = Math.max(0, playerHealth - damage);
console.log(enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. ");

//check player's health
if(playerHealth <= 0) {
    window.alert(playerName + " has died! ");
//leave while() loopu if player is dead
break;
} else {
    window.alert (playerName + " still has " + playerHealth + " health left. ");
}
} //end of while loop
 //end of fight fnction

//fight each enemy-robot by looping over them and fighting them one at a time
//function to start a new game
var startGame = function(){
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
for(var i = 0; i < enemyNames.length; i++); {
    //if player is still alive, keep fighting
    if(playerHealth > 0) {
    //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert(" Welcome to Robot Gladiators! Round " + ( i + 1));
    //pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];
    //reset eneHealth before starting new fight
    enemyHealth = 50;
    //use debugger to pause the script from running and check what's going on at that moment in the code
    //debugger;
    //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName
    fight(pickedEnemyName);
    }
    //if player is still alive and we're not at the last enemy in the arry
    if (playerHealth > && i < enemyNames.length - 1) {
        //ask if player wants to use the store before the next round
        var storeConfirm = window.confirm("The fight is over,  visit the store before the next round?");
        //if yes, take them to the store() function
        if (storeConfirm) {
            var shop = function() {
                //ask player what they'd like to do
                var shopOptionPrompt = window.prompt(
                    "Would you like to REFILL you health, UPGRADE your attack or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE' , or 'Leave' to make a choice."
                );
            }
        }
    }
    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            if (playerMoney >= 5) {
            window.alert("Refilling player's health by 10 for 5 dollars.");

            //increase health and decrease money
            playerHealth = playerHealth + 10;
            playerMoney = playerMoney - 5;
            }
            else {
                window.alert("You don't have enough money!");
            }

            brake;
        case "UPGRADE": //new case
        case "upgrade":
            if (playerMoney >= 10) {
            window.alert("Upgrading player's attack by 5 for 10 dollars.");

            //increase attack and decrease money
            playerAttack = playerAttack + 5;
            playerMoney = playerMoney - 10;
            }
            else{
                Window.alert("You don't have enough money!");
            }

            break;
        case "LEAVE": //new case
        case "leave":
            window.alert("Leaving the store.");

            //do nothing, function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again");

            //call shop() again to force player to pick a valid option
            shop();
            break;
    }
    //if player isn't alive, stop the game
    else {
        window.alert(" You have lost your robot in battle! GAME OVER! ");
        break;
    }
    //start the game when the page loads
startGame();
// function to end the entire game
var endGame = function() {
    //if player is still alive, player wins
    if (playerHealth > 0) {
        window.alert("Great job, you survived the game! You now have a score of " + playerMoney + ". ")
    }
    else {
        window.alert("You lost your robot in battle.");
    }
}
var shop = function() {
    console.log("entered the shop");
};
} 
//ask if player would like to play again
var (playAgainConfirm) {
    //restart the game
    startGame() {
        fight(pickedEnemyName);
        //if we're not at the last enemy in the array
        if (i < enemyNames.length - 1) {
            shop();
        }
        //if player is still alive and we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length - 1) {
            shop();
        } 
    }
}
else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon! ");
}

};





//EDITS

// var pickedEnemyName = enemyNames[i];
//enemyHealth = 50;
//fight(pickedEnemyName);
//if player chose to fight, then fight
//if(promptFight === "fight" || promptFight === "FIGHT")
//log a resulting message to the console so we know that it worked.
//window.alert(playerName + " has died! ");
//leave while() loop since enemy is dead    
//break;
//}else {
//window.alert(playerName + " still has " + playerHealth + " health left");
//end of while loop
//end fight function
//if no (false), ask question again by running fight() again
//else {
//fight();
//window.alert(playerName + " still has " + playerHealth + " health left ");
//else { 
//window.alert( "You need to choose a valid option. Try again! ");
//debugger;
//call fight function with enemy-robot
//fight(enemyNames[i]);
//window.alert("The game has now ended. Let's see how you did!");
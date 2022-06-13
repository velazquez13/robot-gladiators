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

var enemyNames = [" Roborto ", " Amy Android ", " Robo Trumble "];
console.log(enemyNames);
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++); {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyNames);

//fight function
var fight = function(enemyName) {
    //Alert players that they are starting the round
    //window.alert("Welcome to Robot Gladiators!");
    while(enemyHealth > 0)
};
var promptFight = window.prompt( "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");

//if player chose to fight, then fight
if(promptFight === "fight" || promptFight === "FIGHT")

//remove enemy's health by subtracting the amount set in the playerAttack variable
enemyHealth = enemyHealth - playerAttack;

//log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
);
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyNames + "has died!");
        break;
    }else {
        window.alert (enemyNames + " still has " + enemyHealth + " health left. ");
    }
    //subtract the value of 'enemyAttck' for the value of 'playerHealth and use that result to update the value in the 'plyerHealth' variable
    playerHealth = playerHealth - enemyAttack;

    //log a resulting message to the console so we know that it worked.
    enemyNames + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining "

    console.log(enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. ");

    //check player's health
    if(playerHealth <= 0) {
        window.alert(playerName + " has died! ");
    }else {
        window.alert(playerName + " still has " + playerHealth + " health left");
    
    // if player choses to skip
      }if (promptFight === " skip" || promptFight === " SKIP ") {
       //confirm player wants to skip
       var confirmSkip = window.confirm( "Are you sure you'd like to quit? ");

       //if yes (true), leave fight
       if(confirmSkip) {
           window.alert(playerName + " has decided to skip this fight. Goodbye! ");
           //subtract money from playerMoney for skipping
           playerMoney = playerMoney - 10;
           console.log("playerMoney" , playerMoney);
           break;
       }
       //if no (false), ask question again by running fight() again
       else {
           fight();
       }
    window.alert(playerName + " still has " + playerHealth + " health left ");
} else { 
    window.alert( "You need to choose a valid option. Try again! ");
}
; //end fight function

//run fight function to start game
for(var i = 0; i < enemyNames.length; i++) {
    debugger;
    //call fight function with enemy-robot
    fight(enemyNames[i]);
}
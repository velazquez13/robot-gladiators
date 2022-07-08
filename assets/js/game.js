//Game States
//"WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack:10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, //COMMA
    refillHealth: function() {
        if(this.money >=5) {
            window.alert("Refilling player's health by 5 for 10 dollars.")
        }
        this.health += 10;
        this.money -= 5;
    }
    else {
        window.alert("You don't have enough money!");
    }
},
upgradeAttack: function(){
    if (this.money >= 5) {
        window.alert("Upgrading player's attack by 5 for 10 dollars.")
        this.attack += 5;
        this.money -= 10;
    }
}

// also can log: console.log(playerName, playerAttack, playerHealth); 
//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
}

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function
var fight = function(enemy.name) {
    //Alert players that they are starting the round
    while(playerInfo.health > 0 && enemy.health > 0)
var promptFight = window.prompt( "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");

// if player choses to skip, stop loop
if (promptFight === " skip" || promptFight === " SKIP ") {
    //confirm player wants to skip
    var confirmSkip = window.confirm( "Are you sure you'd like to quit? ");
 
    //if yes (true), leave fight
    if(confirmSkip) {
    window.alert(playerInfo.name + " has decided to skip this fight. Goodbye! ");
    //subtract money from playerMoney for skipping
    playerInfo.money = Math.max(0, playerInfo.money - 10);
    console.log("playerInfo.money" , playerInfo.money);
    break;
    }
}

//remove enemy's health by subtracting the amount set in the playerAttack variable
//generate random damage value based on player's attack power
var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

enemy.health = Math.max(0, enemy.health - damage);
console.log(
    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
);

// check enemy's health
if (enemy.health <= 0) {
    window.alert(enemy.names + "has died!");
//award player money for winning
playerInfo.money = playerInfo.money + 20;
//leave while() loop since enemy is dead
    break;
} else {
    window.alert (enemy.name + " still has " + enemy.health + " health left. ");
}

//subtract the value of 'enemyAttck' for the value of 'playerHealth and use that result to update the value in the 'plyerHealth' variable
var damage = randomNumber(enemy.attack - 3, enemy.attack);

playerInfo.health = Math.max(0, playerInfo.health - damage);
console.log(enemy.name + " attacked " + playerInfo.name + " . " + playerInfo.name + " now has " + playerInfo.health + " health remaining. ");

//check player's health
if(playerinfo.health <= 0) {
    window.alert(playerInfo.name + " has died! ");
//leave while() loopu if player is dead
break;
} else {
    window.alert (playerInfo.name + " still has " + playerInfo.health + " health left. ");
}
} //end of while loop
 //end of fight fnction

//fight each enemy-robot by looping over them and fighting them one at a time
//function to start a new game
var startGame = function(){
    // reset player stats
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;
for(var i = 0; i < enemyInfo.length; i++); {
    //if player is still alive, keep fighting
    if(playerInfo.health > 0) {
    //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert(" Welcome to Robot Gladiators! Round " + ( i + 1));
    //pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyObj = enemyInfo[i];
    //reset eneHealth before starting new fight
    enemyHealth = 50;
    //use debugger to pause the script from running and check what's going on at that moment in the code
    //debugger;
    //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName
    fight(pickedEnemyName);
    }
    //if player is still alive and we're not at the last enemy in the arry
    if (playerInfo.health > && i < enemyInfo.length - 1) {
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
            playerInfo.refillHealth();
            break;
           
        case "UPGRADE": //new case
        case "upgrade":
            playerInfo.upgradeAttack();
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you survived the game! You now have a score of " + playerInfo.money + ". ")
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
        if (playerInfo.health > 0 && i < enemyNames.length - 1) {
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
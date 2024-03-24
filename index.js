#! usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
// 1. Computer will generate a random number.
// 2. user input for guessing number.
// 3.Compare user input with computer generated number & show Result.
async function Welcome() {
    let rainbow = chalkAnimation.rainbow("Welcome to CLI Calculator");
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    rainbow.stop();
}
await Welcome();
let condition = true;
while (condition) {
    let randomnumber = Math.floor(Math.random() * 4 + 1);
    const answer = await inquirer.prompt([{
            name: "UserGuessedNumber",
            type: "number",
            message: "Please guess a number",
        }]);
    if (answer.UserGuessedNumber === randomnumber) {
        console.log("Congratulations! You guessed right number.");
    }
    else {
        console.log("Oops! You guessed wrong number.");
    }
    let repeatanswer = await inquirer.prompt([{
            name: "RestartGame",
            type: "list",
            message: "Do you want to continue ?",
            choices: ["yes", "No"]
        }]);
    console.log(repeatanswer);
    if (repeatanswer.RestartGame === "No") {
        condition = false;
    }
}

#! /usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
async function sleep() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
}
;
async function anime() {
    let anim = chalkAnimation.rainbow("Lets start the game");
    await sleep();
    anim.stop();
}
await anime();
async function askquestion() {
    let lives;
    console.log(chalk.blue("Lives=3"));
    for (lives = 1; lives < 4; lives++) {
        var answers = await inquirer.prompt([{
                type: "input",
                name: "number",
                message: chalk.cyan("Enter your guess:"),
            }]);
        let guessnumb = Math.ceil(Math.random() * 10);
        if (guessnumb == answers.number) {
            console.log(chalk.green("WOW! You guessed it right"));
        }
        else if (answers.number > guessnumb) {
            console.log(chalk.red("The number you guessed is greater than the number"));
        }
        else if (guessnumb > answers.number) {
            console.log(chalk.red("The number you guessed is less than the number "));
        }
        console.log(chalk.blue("Lives used:", lives));
    }
    console.log(chalk.red.bold("Game Over"));
}
async function askagain() {
    do {
        await askquestion();
        var ans = await inquirer.prompt([{
                type: "list",
                name: "response",
                message: chalk.yellow("Selet Yes to continue and No to Stop"),
                choices: ["YES", "NO"]
            }]);
    } while (ans.response === "YES");
}
await askagain();

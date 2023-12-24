#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
//To set time for animation
async function sleep() {
    return new Promise((reject) => setTimeout(reject, 2000));
}
async function start() {
    let anim = chalkAnimation.rainbow("Lets Calculate Buddy"); //Start
    await sleep();
    anim.stop();
}
await start();
console.log(chalk.green(` _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`));
async function askquestion() {
    var answers = await inquirer.prompt([{ type: "list",
            name: "operator",
            message: chalk.green("Hello Which operation do you want to perform"),
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"]
        }, {
            type: "number",
            name: "num1",
            message: chalk.green("Enter your  first  number")
        }, {
            type: "number",
            name: "num2",
            message: chalk.green("Enter your  Second  number")
        }
    ]);
    if (answers.operator == "Addition") {
        console.log(chalk.green(`Your answer is: ${answers.num1}+${answers.num2}=${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == "Subtraction") {
        console.log(chalk.green(`Your answer is: ${answers.num1}-${answers.num2}=${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == "Multiplication") {
        console.log(chalk.green(`Your answer is: ${answers.num1}x${answers.num2}=${answers.num1 * answers.num2}`));
    }
    else if (answers.operator == "Division") {
        console.log(chalk.green(`Your answer is: ${answers.num1}/${answers.num2}=${answers.num1 / answers.num2}`));
    }
    else if (answers.operator == "Modulus") {
        console.log(chalk.green(`Your answer is: ${answers.num1}%${answers.num2}=${answers.num1 % answers.num2}`));
    }
}
;
async function repeat() {
    do {
        await askquestion();
        var again = await inquirer.prompt([{
                type: "input",
                name: "restart",
                message: chalk.green("Do you want to continue?Press Y to continue or N to Stop.")
            }]);
    } while (again.restart == "Y" || again.restart == "y" || again.restart == "YES" || again.restart == "yes" || again.restart == "Yes" || again.restart == "yES" || again.restart == "YeS" || again.restart == "yeS");
}
await repeat();

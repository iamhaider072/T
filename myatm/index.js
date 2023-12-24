#! /usr/bin/env node
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
import inquirer from "inquirer";
async function timer() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
}
async function anime() {
    let anim = chalkAnimation.rainbow("Welcome to HashBank");
    await timer();
    anim.stop();
}
await anime();
async function bank() {
    let ask = await inquirer.prompt([{
            type: "input",
            name: "UserID",
            message: chalk.green("Enter your User ID")
        },
        {
            type: "password",
            name: "PIN",
            message: chalk.green("Enter your Password")
        },
        {
            type: "list",
            name: "Options",
            messages: "Select",
            choices: ["Current", "Savings", "Default"]
        }]);
    var balance = Math.floor(Math.random() * 100000);
    if (ask.Options === "Current") {
        var ask3 = await inquirer.prompt({
            type: "list",
            name: "options",
            choices: ["Fast Cash", "Cash Withdrawal", "Account Balance"]
        });
        if (ask3.options === "Fast Cash" || ask3.options === "Cash Withdrawal") {
            console.log(chalk.magenta("Your withdrawed cash is  " + balance + " $"));
        }
        else if (ask3.options === "Account Balance") {
            console.log(chalk.magenta("Your available balance is " + balance + " $"));
        }
    }
    else if (ask.Options === "Savings") {
        let ask1 = await inquirer.prompt({
            type: "list",
            name: "options",
            choices: ["Fast Cash", "Cash Withdrawal", "Account Balance"]
        });
        if (ask1.options === "Fast Cash" || ask1.ptions === "Cash Withdrawal") {
            console.log(chalk.magenta("Your withdrawed cash is " + balance + " $"));
        }
        else if (ask1.options === "Account Balance") {
            console.log(chalk.magenta("Your available balance is " + balance + " $"));
        }
    }
    else if (ask.Options === "Default") {
        let ask2 = await inquirer.prompt({
            type: "list",
            name: "options",
            choices: ["Fast Cash", "Account Balance"]
        });
        if (ask2.options === "Fast Cash") {
            console.log(chalk.magenta("Your Withdrawed amount is " + balance + " $"));
        }
        else if (ask2.options === "Account Balance") {
            console.log(chalk.magenta("Your available balance is " + balance + " $"));
        }
    }
    console.log(chalk.redBright("Thank you for using ATM"));
}
await bank();

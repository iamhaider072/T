#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
async function time() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
}
async function anime() {
    let anim = chalkAnimation.rainbow("Welcome to currency converter");
    await time();
    anim.stop();
}
await anime();
async function ask() {
    var convert1 = await inquirer.prompt({
        type: "list",
        name: "from",
        message: chalk.green("Which currency do you want to convert?"),
        choices: ["Dollar", "Euro", "Pound", "Yuan", "Pak Ruppee"]
    });
    var amount = await inquirer.prompt({
        type: "input",
        name: "amount",
        message: chalk.green("Enter the amount")
    });
    var convert2 = await inquirer.prompt({
        type: "list",
        name: "to",
        message: chalk.green("In which currency do you want to convert"),
        choices: ["Dollar", "Euro", "Pound", "Yuan", "PakRuppee"]
    });
    if (convert1.from === "Dollar" && convert2.to === "Dollar") {
        console.log(chalk.magenta(amount.amount + " Dollar"));
    }
    else if (convert1.from === "Dollar" && convert2.to === "Euro") {
        console.log(chalk.magenta(amount.amount * 0.94 + " Euro"));
    }
    else if (convert1.from === "Dollar" && convert2.to === "Pound") {
        console.log(chalk.magenta(amount.amount * 0.83 + " Pound"));
    }
    else if (convert1.from === "Dollar" && convert2.to === "Yuan") {
        console.log(chalk.magenta(amount.amount * 6.96 + " Yuan"));
    }
    else if (convert1.from === "Dollar" && convert2.to === "PakRuppee") {
        console.log(chalk.magenta(amount.amount * 226.38 + " PakRuppe"));
    }
    else if (convert1.from === "Pound" && convert2.to === "Dollar") {
        console.log(chalk.magenta(amount.amount * 1.21 + " Dollar"));
    }
    else if (convert1.from === "Pound" && convert2.to === "Euro") {
        console.log(chalk.magenta(amount.amount * 1.13 + " Euro"));
    }
    else if (convert1.from === "Pound" && convert2.to === "Pound") {
        console.log(chalk.magenta(amount.amount + " Pound"));
    }
    else if (convert1.from === "Pound" && convert2.to === "Yuan") {
        console.log(chalk.magenta(amount.amount * 8.39 + " Yuan"));
    }
    else if (convert1.from === "Pound" && convert2.to === "PakRuppee") {
        console.log(chalk.magenta(amount.amount * 1.13 + " PakRuppe"));
    }
    else if (convert1.from === "Euro" && convert2.to === "Dollar") {
        console.log(chalk.magenta(amount.amount * 1.07 + " Dollar"));
    }
    else if (convert1.from === "Euro" && convert2.to === "Euro") {
        console.log(chalk.magenta(amount.amount + " Euro"));
    }
    else if (convert1.from === "Euro" && convert2.to === "Pound") {
        console.log(chalk.magenta(amount.amount * 0.88 + " Pound"));
    }
    else if (convert1.from === "Euro" && convert2.to === "Yuan") {
        console.log(chalk.magenta(amount.amount * 7.43 + " Yuan"));
    }
    else if (convert1.from === "Euro" && convert2.to === "PakRuppee") {
        console.log(chalk.magenta(amount.amount * 243.38 + " PakRuppe"));
    }
    else if (convert1.from === "Yuan" && convert2.to === "Dollar") {
        console.log(chalk.magenta(amount.amount * 0.14 + " Dollar"));
    }
    else if (convert1.from === "Yuan" && convert2.to === "Euro") {
        console.log(chalk.magenta(amount.amount * 0.13 + " Euro"));
    }
    else if (convert1.from === "Yuan" && convert2.to === "Pound") {
        console.log(chalk.magenta(amount.amount * 0.12 + " Pound"));
    }
    else if (convert1.from === "Yuan" && convert2.to === "Yuan") {
        console.log(chalk.magenta(amount.amount + " Yuan"));
    }
    else if (convert1.from === "Yuan" && convert2.to === "PakRuppee") {
        console.log(chalk.magenta(amount.amount * 32.51 + " PakRuppe"));
    }
    else if (convert1.from === "PakRuppee" && convert2.to === "Dollar") {
        console.log(chalk.magenta(amount.amount * 0.0044 + " Dollar"));
    }
    else if (convert1.from === "PakRuppee" && convert2.to === "Euro") {
        console.log(chalk.magenta(amount.amount * 0.0041 + " Euro"));
    }
    else if (convert1.from === "PakRuppee" && convert2.to === "Pound") {
        console.log(chalk.magenta(amount.amount * 0.0037 + " Pound"));
    }
    else if (convert1.from === "PakRuppee" && convert2.to === "Yuan") {
        console.log(chalk.magenta(amount.amount * 0.031 + " Yuan"));
    }
    else if (convert1.from === "PakRuppe" && convert2.to === "PakRuppee") {
        console.log(chalk.magenta(amount.amount + " PakRuppe"));
    }
}
async function again() {
    do {
        await ask();
        console.log(chalk.redBright("THE END"));
        var ag = await inquirer.prompt({
            type: "input",
            name: "repeat",
            message: chalk.yellow("Press Y to restart N to Stop")
        });
    } while (ag.repeat === "Y" || ag.repeat === "y" || ag.repeat === "YES" || ag.repeat === "Yes" || ag.repeat === "yes");
}
again();

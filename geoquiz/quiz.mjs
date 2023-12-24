import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
async function time() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
}
;
async function anim() {
    let anim = chalkAnimation.rainbow("Welcome to the Quiz");
    await time();
    anim.stop();
}
await anim();
async function quiz() {
    var marks = 0;
    var ask = await inquirer.prompt([{
            type: 'list',
            message: chalk.blue('What is the capital of Pakistan? \n ------------------------------'),
            choices: ['Lahore', 'Islamabad', 'Dehli', 'Jhang'],
            name: 'Pakistan'
        },
        {
            type: 'list',
            message: chalk.blue('What is the capital of Saudi Arabia?\n ------------------------------'),
            choices: ['Holy Makkah', 'Madina Sharif', 'Riyadh', 'Basra'],
            name: 'Saudi'
        }, {
            type: 'list',
            message: chalk.blue('What is the capital of Iran?\n ------------------------------'),
            choices: ['Mashad Muqqadas', 'Kumb', 'Isfahan', 'Tehran'],
            name: 'Iran'
        }, {
            type: 'list',
            message: chalk.blue('What is the capital of Iraq?\n ------------------------------'),
            choices: ['Holy Karbala', 'Najaf Ashraf', 'Kufa', 'Baghdad'],
            name: 'Iraq'
        }, {
            type: 'list',
            message: chalk.blue('What is the capital of Syria?\n ------------------------------'),
            choices: ['Damascus', 'Aleppo', 'Kazmain', 'Basra'],
            name: 'Syria'
        }]);
    if (ask.Pakistan == 'Islamabad') {
        marks++;
    }
    if (ask.Saudi == 'Riyadh') {
        marks++;
    }
    if (ask.Iran == 'Tehran') {
        marks++;
    }
    if (ask.Iraq == 'Baghdad') {
        marks++;
    }
    if (ask.Syria == 'Damascus') {
        marks++;
    }
    console.log(chalk.magenta(`You scored ${(marks / 5) * 100} %  `));
}
await quiz();

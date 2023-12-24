#! usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
//Game Variables
var enemies = ['Skeleton', 'Zombie', 'Warrior', 'Assasin'];
var maxEnemyHealth = 75;
var maxEnemyDamage = 25;
//Player Variables
var Health = 100;
var AttackDamage = 50;
var numHealthPotions = 3;
var HealthPotionHealamount = 50;
var HealthPotionDropCHance = 30;
var running = true;
console.log(chalk.magenta("Welcome to the Dungeon!"));
GAME: while (running) {
    console.log(chalk.magenta("----------------------------------------------------------------------------------------"));
    var enemyHealth = Math.ceil(Math.random() * maxEnemyHealth);
    var enemy = enemies[Math.ceil(Math.random() * enemies.length - 1)];
    console.log(chalk.blueBright(`\t  ${enemy}  has appeared! #\n`));
    Player: while (enemyHealth > 0) {
        console.log(chalk.green("\t Your HP:" + Health));
        console.log(chalk.greenBright('\t' + enemy + `'s` + ' HP:' + enemyHealth));
        var ask = await inquirer.prompt([{
                type: "list",
                message: chalk.yellow("What action would u like to perform?"),
                name: 'options',
                choices: ['Attack', 'Drink Health Potion', 'Run']
            }]);
        if (ask.options == 'Attack') {
            var DamageDealt = Math.ceil(Math.random() * AttackDamage);
            var DamageTaken = Math.ceil(Math.random() * maxEnemyDamage);
            enemyHealth = enemyHealth - DamageDealt;
            Health = Health - DamageTaken;
            console.log(chalk.yellow(`You strike the  ${enemy} for ${DamageDealt}  damage `));
            console.log(chalk.yellow(`You recieve the ${DamageTaken} in retaliation. `));
            if (Health < 15) {
                console.log(chalk.red("You took too much damage. You cannot carry on"));
                break;
            }
        }
        else if (ask.options == 'Drink Health Potion') {
            if (numHealthPotions > 0) {
                Health = Health + HealthPotionHealamount;
                numHealthPotions--;
                console.log(chalk.gray(`You drink a health potion healing yourself for  ${HealthPotionHealamount}.`));
                console.log(chalk.greenBright(`You now have ${Health}  HP`));
                console.log(chalk.green(`You know have ${numHealthPotions}  left.`));
            }
            else {
                console.log(chalk.red(`You know have no health potions left defeat your enemy for a chance to get!`));
            }
        }
        else if (ask.options == 'Run') {
            console.log(chalk.bgCyan(`You run away from the ${enemy}.`));
            continue GAME;
        }
        if (Health < 1) {
            console.log(chalk.bgBlueBright(`You comeout of the dungeon weak for the battle`));
        }
        console.log(chalk.magenta(`----------------------------------------------------------------------------------`));
        console.log(`#  ${enemy}  was defeated  #`);
        console.log(`You have ${Health} HP left`);
        if (HealthPotionDropCHance > Math.ceil(Math.random() * 100 - 1)) {
            numHealthPotions++;
            console.log(`The ${enemy} dropped the Health Potion`);
            console.log(`You now have ${numHealthPotions}  Health potions remaining`);
        }
        var ask1 = await inquirer.prompt({
            type: "list",
            message: chalk.yellow("What would you like to do ?"),
            name: "option1",
            choices: ['Continue Fighting', 'Exitdungeon']
        });
        if (ask1.option1 == 'Continue Fighting') {
            console.log(chalk.greenBright(`You continue on your adventure.`));
            break Player;
        }
        else if (ask1.option1 == 'Exitdungeon') {
            console.log(chalk.red('You exited from the dungeon successfully'));
            break GAME;
        }
    }
}
console.log(chalk.red(`#######################`));
console.log(chalk.redBright(`  Thanks for playing`));
console.log(chalk.red(`#######################`));

#! usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import Choices from "inquirer/lib/objects/choices.js";
import Choice from "inquirer/lib/objects/choice.js";
import { down } from "inquirer/lib/utils/readline.js";


async function time(){
    return new Promise((resolve)=>
    setTimeout(resolve,1000)
    )}


async function anime(){
let anim=chalkAnimation.rainbow("TO DO LIST")
 await time()
anim.stop()
}
await anime();


async function todo(){
    var ask=await inquirer.prompt([{
type:"checkbox",
name:"todolist",
message:chalk.green("These are the activities you want to perform"),
choices:[chalk.blue("Go to university"),chalk.blue("Read Books"),chalk.blue("Study"),chalk.blue("Exercise"),chalk.blue("Sleep on time"),chalk.blue("Other")] 
}]);
if(ask.todolist="Other"){
let ask1=await inquirer.prompt([{
    type:chalk.blue("input"),
    name:"enter",
    message:chalk.green("Your other tasks are :")
}])
}

}
async function again(){
  do{
    await todo();
    console.log(chalk.red("THE END"))
var restart= await inquirer.prompt({
    type:"input",
    name:"askagain",
    message:chalk.yellow("Press Y to Restart and N to Stop")
});
}while(restart.askagain==="Y"||restart.askagain==="y"||restart.askagain==="YES"||restart.askagain==="yes"||restart.askagain==="Yes")
} 
await again();








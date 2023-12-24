#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

async function time(){
    return new Promise((resolve)=>{setTimeout( resolve,2000)})
}


async function anime(){
let anim= chalkAnimation.rainbow("          Word Counter");
await time();
anim.stop()
}

await anime();


async function ask(){
    var ask = await inquirer.prompt([{
   type:"input",
   name:"write",
   message:chalk.blue("Enter your text")     
}]);

var count=ask.write.replace(/\s/g,'');
console.log(chalk.blue("? Count of Characters is: ")+chalk.green(count.length));

}

async function again(){
    do {
        await ask();
        var again=await inquirer.prompt({
            type:"input",
            name:"repeat",
            message:chalk.yellow("Press Y to Repeat and N to terminate?")
        })
        
}while(again.repeat==="Y"||again.repeat==="y"||again.repeat==="YES"||again.repeat==="yes"||again.repeat==="Yes")
}
 await again();
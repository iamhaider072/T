import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

//function to stop ChalkAnimation
async function time(){
    return new Promise((resolve)=>setTimeout(  
        resolve, 1500))
}


async function chalk_use(){
let anim=chalkAnimation.rainbow("Student Management System");
await time();
anim.stop();
}
await chalk_use();

async function sms(){
var ask = await inquirer.prompt([{
    type:"input",
    name:"name",
    message:chalk.magenta("Enter your name")
},{
    type:"input",
    name:"email",
    message:chalk.magenta("Enter your E-mail address")
},
{
    type:"password",
    name:"PIN",
    message:chalk.magenta("Enter your PIN")
},{
    type:"rawlist",
    name:"courses",
    choices:["Block-Chain","Cloud-Native","Artificial Intelligence","Ambient Computing"],
    message:chalk.magenta("Select your course")
},{
    type:"list",
    name:"TutionFees",
    choices:["PAID","UNPAID"],
    message:chalk.magenta("Select Tution Fee Status")
}]);
if(ask.TutionFees==="PAID"){
console.log(chalk.blue("Name: ")+ask.name+'\n'+chalk.blue("E-mail: ")+ask.email+"\n"+chalk.blue("Course: ")+ask.courses+'\n'+chalk.green("Your fees is paid"))
}else if(ask.TutionFees==="UNPAID"){
console.log(chalk.blue("Name: ")+ask.name+"\n"+chalk.blue("E-mail: ")+ask.email+"\n"+chalk.blue("Course: ")+ask.courses+"\n"+chalk.red("Your dues are pending"))
}
}
sms();

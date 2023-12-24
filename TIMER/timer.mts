#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


async function time(){
    return new Promise((resolve)=>
    setTimeout(resolve,1000))
}


async function anime(){
let anim=chalkAnimation.rainbow("Welcome to Countdown Timer");
await time();
anim.stop();
}
await anime();










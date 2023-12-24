#! usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

 console.log(chalk.magenta(           "Welcome to the Timer"));


 var ask=await inquirer.prompt({
    type:'number',
    message:chalk.greenBright('Enter the time:'+'\n'),
    name:'time'
 });
 var timer=ask.time
 async function countdown(time:number) {
    var countDownDate = new Date().getTime() + (time * 1000);
  
    var x = setInterval(function() {
      // Get the current time
      var now = new Date().getTime();
  
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
  
      // Time calculations for days, hours, minutes and seconds
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the result in the console
      console.log(chalk.magenta(seconds + " seconds remaining..."));
  
      // If the count down is finished, clear the interval and display a message
      if (distance < 0) {
        clearInterval(x);
        console.log(chalk.red("Countdown finished!"));
        
      }
    }, 1000);
  };
  await countdown(timer);

 





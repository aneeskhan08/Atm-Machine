#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';

let myBalance = 10000;
let myPin = 7890;
console.log(`${chalk.yellow(`WELLCOME TO`)} ${chalk.green(`MALIK ANEES`)} ${chalk.red(`ATM Machine`)}`);
 let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number",
        }
        
    ]
)

if(pinAnswer.pin === myPin){
    console.log(`${chalk.green(`correct pin code!!!`)}`);

    let operatioAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw","fast track","check balance","exit"]
            }
            
        ]
    );
    if(operatioAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number",
                }
                
            ]
        );
        myBalance -= amountAns.amount;
        if(amountAns.amount <= myBalance){
            console.log(chalk.yellow(`your remainig balance is : ${myBalance}`));
        }
        else{
            console.log(`${chalk.yellow(`your balance is`)} ${chalk.red(`insufficient!!!`)}`);
        }
        
    }
    if(operatioAns.operation === "fast track"){

        let fastAns = await inquirer.prompt(
            [
                {
                    name: "fast",
                    message: "please select payment",
                    type: "list",
                    choices: ["2000","5000","10000","15000"]
                }
                
            ]
        );
        if(fastAns.fast === "2000"){
          let fast_2 = 2000;
          myBalance -= fast_2;
          console.log(chalk.yellow(`your remaining balance is : ${myBalance}`));
        }
        else if(fastAns.fast === "5000"){
            let fast_5 = 5000;
            myBalance -= fast_5;
            console.log(chalk.yellow(`your remainig balance is : ${myBalance}`));
        }
        else if(fastAns.fast === "10000"){
            let fast_10 = 10000;
            myBalance -= fast_10;
            console.log(chalk.yellow(`your remainig balance is : ${myBalance}`));
        }
        else if(fastAns.fast === "15000"){
            console.log(`${chalk.yellow(`your balance is`)} ${chalk.red(`insufficient!!!`)}`);
        }
    }
    else if(operatioAns.operation === "check balance"){
          console.log(chalk.blue(`your balance is : ${myBalance}`));
    }
    else if(operatioAns.operation === "exit"){
        console.log(chalk.yellow(`chalo thek hai Allah Hafiz phr paiso ki zrorat ho g phr mily gy`));
  }
}
else{
    console.log(chalk.red("incorrect pin code!!!"));
}
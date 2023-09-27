import cal from "./function.js"
import inquirer from "inquirer";
async function calculator(){
    console.log("Welcome to My calculator");

    let user= await inquirer.prompt([{
        type:"input",
        name:"name",
        message:"Please enter your name"
    }])

    console.log(`Hello ${user.name} which calcuation you want to perform`);

    let choice= await inquirer.prompt([{
        type:"list",
        name:"choices",
        message:`Please select ${user.name} choice`,
        choices:["addition","subtraction","multiplication","division","power","square root"]
    }])

    if(choice.choices=="addition"){
        cal.addition()
    }
    else if(choice.choices=="subtraction"){
        cal.subtraction()
    }
    else if(choice.choices=="multiplication"){
        cal.multiplication()
    }
    else if(choice.choices=="division"){
        cal.division()
    }
    else if(choice.choices=="power"){
        cal.power()
    }
    else if(choice.choices=="square root"){
        cal.squareRoot()
    }

}
calculator();
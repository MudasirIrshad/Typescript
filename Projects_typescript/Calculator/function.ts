import inquirer from "inquirer";

async function  addition(){
    let numbers=await inquirer.prompt([
        {
            type:"number",
            message:"Please enter a first number",
            name:"n1"
        },
        {
            type:"number",
            message:"Please enter a second number",
            name:"n2"
        }
    ])
    let num1=numbers.n1
    let num2=numbers.n2
    let ans=num1+num2
    console.log(`${num1} + ${num2} = ${ans}`);
}
async function subtraction(){
    let numbers=await inquirer.prompt([
        {
            type:"number",
            message:"Please enter a first number",
            name:"n1"
        },
        {
            type:"number",
            message:"Please enter a second number",
            name:"n2"
        }
    ])
    let num1=numbers.n1
    let num2=numbers.n2
    let ans=num1-num2
    console.log(`${num1} - ${num2} = ${ans}`);
}
async function multiplication(){
    let numbers=await inquirer.prompt([
        {
            type:"number",
            message:"Please enter a first number",
            name:"n1"
        },
        {
            type:"number",
            message:"Please enter a second number",
            name:"n2"
        }
    ])
    let num1=numbers.n1
    let num2=numbers.n2
    let ans=num1*num2
    console.log(`${num1} * ${num2} = ${ans}`);
}
async function division(){
    let numbers=await inquirer.prompt([
        {
            type:"number",
            message:"Please enter a first number",
            name:"n1"
        },
        {
            type:"number",
            message:"Please enter a second number",
            name:"n2"
        }
    ])
    let num1=numbers.n1
    let num2=numbers.n2
    let ans=num1/num2
    console.log(`${num1} / ${num2} = ${ans}`);
}
async function power(){
    let numbers=await inquirer.prompt([
        {
            type:"number",
            message:"Please enter a first number",
            name:"n1"
        }
    ])
    let num1=numbers.n1
    let ans=num1*num1
    console.log(`${num1} ^2 = ${ans}`);
}
async function squareRoot(){
    let numbers=await inquirer.prompt([
        {
            type:"number",
            message:"Please enter a first number",
            name:"n1"
        }
    ])
    let num1=numbers.n1
    let ans=Math.sqrt(num1)
    console.log(`sqrt of ${num1} = ${ans}`);
}


export default {addition,subtraction,multiplication,division,power,squareRoot}
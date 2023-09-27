import inquirer from "inquirer";
let guess_num = Math.round(Math.random() * 10);
let i = 0;
console.log("You have 3 guesses");
do {
    let input = await inquirer.prompt([
        {
            message: "Guess the number",
            type: "number",
            name: "guess"
        }
    ]);
    if (input.guess == guess_num) {
        console.log("Your Guess is correct and you win the game");
        break;
    }
    else if (input.guess < guess_num) {
        console.log("Your guess number is smaller then the hidden number");
    }
    else {
        console.log("your guess is too big");
    }
    i += 1;
} while (i < 3);
if (i == 1) {
    console.log("YOU LOSE\nYOUR GUESSES ARE NOT CORRECT IN LIMIT OF 3 CHOICES");
}

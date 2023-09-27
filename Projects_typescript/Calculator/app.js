var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import cal from "./function.js";
import inquirer from "inquirer";
function calculator() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Welcome to My calculator");
        let user = yield inquirer.prompt([{
                type: "input",
                name: "name",
                message: "Please enter your name"
            }]);
        console.log(`Hello ${user.name} which calcuation you want to perform`);
        let choice = yield inquirer.prompt([{
                type: "list",
                name: "choices",
                message: `Please select ${user.name} choice`,
                choices: ["addition", "subtraction", "multiplication", "division", "power", "square root"]
            }]);
        if (choice.choices == "addition") {
            cal.addition();
        }
        else if (choice.choices == "subtraction") {
            cal.subtraction();
        }
        else if (choice.choices == "multiplication") {
            cal.multiplication();
        }
        else if (choice.choices == "division") {
            cal.division();
        }
        else if (choice.choices == "power") {
            cal.power();
        }
        else if (choice.choices == "square root") {
            cal.squareRoot();
        }
    });
}
calculator();

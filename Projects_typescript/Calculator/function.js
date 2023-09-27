var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
function addition() {
    return __awaiter(this, void 0, void 0, function* () {
        let numbers = yield inquirer.prompt([
            {
                type: "number",
                message: "Please enter a first number",
                name: "n1"
            },
            {
                type: "number",
                message: "Please enter a second number",
                name: "n2"
            }
        ]);
        let num1 = numbers.n1;
        let num2 = numbers.n2;
        let ans = num1 + num2;
        console.log(`${num1} + ${num2} = ${ans}`);
    });
}
function subtraction() {
    return __awaiter(this, void 0, void 0, function* () {
        let numbers = yield inquirer.prompt([
            {
                type: "number",
                message: "Please enter a first number",
                name: "n1"
            },
            {
                type: "number",
                message: "Please enter a second number",
                name: "n2"
            }
        ]);
        let num1 = numbers.n1;
        let num2 = numbers.n2;
        let ans = num1 - num2;
        console.log(`${num1} - ${num2} = ${ans}`);
    });
}
function multiplication() {
    return __awaiter(this, void 0, void 0, function* () {
        let numbers = yield inquirer.prompt([
            {
                type: "number",
                message: "Please enter a first number",
                name: "n1"
            },
            {
                type: "number",
                message: "Please enter a second number",
                name: "n2"
            }
        ]);
        let num1 = numbers.n1;
        let num2 = numbers.n2;
        let ans = num1 * num2;
        console.log(`${num1} * ${num2} = ${ans}`);
    });
}
function division() {
    return __awaiter(this, void 0, void 0, function* () {
        let numbers = yield inquirer.prompt([
            {
                type: "number",
                message: "Please enter a first number",
                name: "n1"
            },
            {
                type: "number",
                message: "Please enter a second number",
                name: "n2"
            }
        ]);
        let num1 = numbers.n1;
        let num2 = numbers.n2;
        let ans = num1 / num2;
        console.log(`${num1} / ${num2} = ${ans}`);
    });
}
function power() {
    return __awaiter(this, void 0, void 0, function* () {
        let numbers = yield inquirer.prompt([
            {
                type: "number",
                message: "Please enter a first number",
                name: "n1"
            }
        ]);
        let num1 = numbers.n1;
        let ans = num1 * num1;
        console.log(`${num1} ^2 = ${ans}`);
    });
}
function squareRoot() {
    return __awaiter(this, void 0, void 0, function* () {
        let numbers = yield inquirer.prompt([
            {
                type: "number",
                message: "Please enter a first number",
                name: "n1"
            }
        ]);
        let num1 = numbers.n1;
        let ans = Math.sqrt(num1);
        console.log(`sqrt of ${num1} = ${ans}`);
    });
}
export default { addition, subtraction, multiplication, division, power, squareRoot };

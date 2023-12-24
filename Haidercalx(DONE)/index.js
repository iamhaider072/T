#! /usr/bin/env node                    // NPX haidercalx
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
//To set time for animation
function sleep() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((reject) => setTimeout(reject, 2000));
    });
}
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        let anim = chalk_animation_1.default.rainbow("Lets Calculate Buddy"); //Start
        yield sleep();
        anim.stop();
    });
}
await start();
console.log(chalk_1.default.green(` _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`));
function askquestion() {
    return __awaiter(this, void 0, void 0, function* () {
        var answers = yield inquirer_1.default.prompt([{ type: "list",
                name: "operator",
                message: chalk_1.default.green("Hello Which operation do you want to perform"),
                choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"]
            }, {
                type: "number",
                name: "num1",
                message: chalk_1.default.green("Enter your  first  number")
            }, {
                type: "number",
                name: "num2",
                message: chalk_1.default.green("Enter your  Second  number")
            }
        ]);
        if (answers.operator == "Addition") {
            console.log(chalk_1.default.green(`Your answer is: ${answers.num1}+${answers.num2}=${answers.num1 + answers.num2}`));
        }
        else if (answers.operator == "Subtraction") {
            console.log(chalk_1.default.green(`Your answer is: ${answers.num1}-${answers.num2}=${answers.num1 - answers.num2}`));
        }
        else if (answers.operator == "Multiplication") {
            console.log(chalk_1.default.green(`Your answer is: ${answers.num1}x${answers.num2}=${answers.num1 * answers.num2}`));
        }
        else if (answers.operator == "Division") {
            console.log(chalk_1.default.green(`Your answer is: ${answers.num1}/${answers.num2}=${answers.num1 / answers.num2}`));
        }
        else if (answers.operator == "Modulus") {
            console.log(chalk_1.default.green(`Your answer is: ${answers.num1}%${answers.num2}=${answers.num1 % answers.num2}`));
        }
    });
}
;
function repeat() {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            yield askquestion();
            var again = yield inquirer_1.default.prompt([{
                    type: "input",
                    name: "restart",
                    message: chalk_1.default.green("Do you want to continue?Press Y to continue or N to Stop.")
                }]);
        } while (again.restart == "Y" || again.restart == "y" || again.restart == "YES" || again.restart == "yes" || again.restart == "Yes" || again.restart == "yES" || again.restart == "YeS" || again.restart == "yeS");
    });
}
await repeat();

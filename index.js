#!/user/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PRK: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["USD", 'EUR', "PRK", "INR", "GBP",],
        message: "Enter Currency From"
    },
    {
        name: "to",
        type: "list",
        choices: ["USD", "EUR", "PRK", "INR", "GBP"],
        message: "Enter Currency To"
    },
    {
        name: "amount",
        message: "Enter Amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let base = amount / fromAmount;
let converssion = base * toAmount;
console.log(converssion);

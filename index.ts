#! /usr/bin/env node
import inquirer from "inquirer";
const sentence = await inquirer.prompt([
  {
    name: "message",
    type: "input",
    message: "Enter your sentence for count words!",
  },
]);
const message = sentence.message.trim().split(" ");
console.log(message);
console.log(`Your sentence word count is ${message.length}`);

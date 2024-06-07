#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const word = answer.sentence.trim().split(" ");
console.log(`Your sentence word count is : ${word.length}`);

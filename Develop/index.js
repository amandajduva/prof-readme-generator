// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdownImport = require("./utils/generateMarkdown");

// An array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's title?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "description",
        message: "Please type a short description of your project.",
    },
    {
        type: "list",
        name: "license",
        message: "Please choose what kind of license your project should have.",
        choices: ["MIT", "Apache 2.0", "Mozilla 2.0", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be used to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "Please type what the user needs to know about using the repository.",
    },
    {
        type: "input",
        name: "contributing",
        message: "How can the user contribute to the repository?",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be used to run tests?",
        default: "npm test"
    },
];

// A function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponse) => {
       return fs.writeFile(path.join(process.cwd(), "README.md"), generateMarkdown(inquirerResponse));
    });
}

// Function call to initialize app
init();

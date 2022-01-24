// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const path = require('path');
const generateMardown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'username',
    message: 'What is your Github username',
},
{
    type: 'input',
    name: 'title',
    message: 'Input your project name.',
},
{
    type: 'input',
    name: 'description',
    message: 'Write the description of your project',
},
{
    type: 'input',
    name: 'installation',
    message: 'Describe the steps for the Installation of your project.',
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide examples of your project.',
},
{
    type: 'input',
    name: 'credits',
    message: 'Provide developers in your project.',   
},
{
    type: 'list',
    name: 'license',
    message: 'choose a license:', 
    choices: ["Apache 2.0", "GNU 3.0 (GPL)", "GNU Library (LGPL)", "MIT License", "Mozilla Public License 2.0", "Common Development and Distrubtion License", "Eclipse Public License version 2.0"]
},
{   
    type: 'input',
    name: 'email',
    message: "What is your E-mail?"

},
{
    test: 'input',
    name: 'tests',
    message: "Write tests dones for you application. "
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((ans)=>{
        writeToFile('README1.md', generateMardown(ans))
    })
}

// Function call to initialize app
init();

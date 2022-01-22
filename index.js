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
    name: 'contributors',
    message: 'Provide developers in your project.',   
},
{
    type: 'list',
    name: 'license',
    message: 'choose a license:',
    choices: ["a", "b", "c"]
},
{   
    type: 'input',
    name: 'email',
    message: "What is your E-mail?"

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

//Dependencies 
// const generateHtml = require();
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const { ChildProcess } = require('child_process');

//Array that will be filled with employee data
const team = [];

const managerData = () => {
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers phone number?'
        }
        ])
        .then((managerResponses)=>{
        const { name, id, email, officeNumber } = managerResponses;
        const manager = new Manager(name, id, email, officeNumber);
        
        team.push(manager)
        displayMenu()
        console.log(manager)

//create an instance for the terminal to hook into employee data based on choices
        })
};

const employeeData = () => {
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'What is the employee name'
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employee id?'
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'What is the employee email?'
        },
        {
            //this question will appear if employee role is set to intern
            type: 'input',
            name: 'school',
            message: "What is the Intern's school name?",
            when: (userInput) => userInput.employeeRole === "Intern"
        },
        {
            //this question will appear if employee role is set to engineer 
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?",
            when: (userInput) => userInput.employeeRole === "Engineer"
        }
        ])
};


//insert display menu function here 


















// this code might not be needed ------------------------------------------------------
const engineerData = () => {
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?'
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?"
        }
        ])
};
const internData = () => {
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers phone number?'
        }
        ])
};

// possibly delete the code above ----------------------------------------------------------------------

function init() {
    managerData();
};
init();


function displayMenu() {
    return inquirer
    .prompt([
    {
        type: 'list',
        name: 'employeeRole',
        message: 'Please choose a role',
        choices: ['Intern', 'Engineer']
    }])};






    // pulled from class mini project

//     const generateHTML = ({ name, location, github, linkedin }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">LinkedIn: ${linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

//pulled from class mini project 
// const init = () => {
//     promptUser()
//       // Use writeFileSync method to use promises instead of a callback function
//       .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
//       .then(() => console.log('Successfully wrote to index.html'))
//       .catch((err) => console.error(err));
//   };

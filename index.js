//Dependencies 
// const generateHtml = require();
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const generateHtml = require('./dist/generateHtml')
const { ChildProcess } = require('child_process');
const { timeStamp } = require('console');

//Array that will be filled with employee data
const team = [];

const createManager = () => {
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
        .then((managerResponses) => {
            const { name, id, email, officeNumber } = managerResponses;
            const manager = new Manager(name, id, email, officeNumber);
            team.push(manager)
            displayMenu()
            // console.log(manager)
        })
};
const createEmployee = (employeeRole) => {
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
                when: () => employeeRole === "Intern"
            },
            {
                //this question will appear if employee role is set to engineer 
                type: 'input',
                name: 'github',
                message: "What is the engineer's github username?",
                when: () => employeeRole === "Engineer"
            }
        ])
        .then((employeeResponses) => {
            console.log(employeeResponses);
            let employee;
            const { employeeName, employeeId, employeeEmail } = employeeResponses;
            if (employeeRole === 'Intern') {
                employee = new Intern(employeeName, employeeId, employeeEmail, employeeResponses.school)
            } else {
                employee = new Engineer(employeeName, employeeId, employeeEmail, employeeResponses.github)
            }
            team.push(employee)
            displayMenu();

        })
};
//insert display menu function here 
function init() {
    createManager();
};
init();

function displayMenu() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeRole',
                message: 'Please choose a role',
                choices: ['Intern', 'Engineer', 'Exit']
            }])
        .then((menuResponse) => {
            const { employeeRole } = menuResponse
            if (employeeRole === 'Exit') {
                
                console.log(team)
                // inserting generate html funciton to append data to template literals
            }
            else {
                createEmployee(employeeRole)
            }
        });
};


//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err)}
    })
};

function createTeamHtml(teamData) { 
   writeToFile("dist/team.html", generateHtml(teamData)
   )};
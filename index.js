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
            type: 'input',
            name: 'employeePhoneNumber',
            message: 'What is the employee phone number?'
        }
        ])

};

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

function init() {
    managerData()
};
init();

function displayMenu() {
    return inquirer
    .prompt([
    {
        type: 'list',
        name: 'name',
        message: 'Choose a role',
        choices: ['Manager', 'Intern', 'Engineer']
    }])};
    
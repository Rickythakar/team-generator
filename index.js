//Dependencies 
const generateHtml = require();
const inquire = require('inquirer');
const employee = require('./lib/Employee');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');
const fs = require('fs');

const positions = [];


const infoEmployee = () => {
    return inquire
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the employee phone number?'
        }
        ])

};

const infoEngineer = () => {
    return inquire
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

const infoIntern = () => {
    return inquire
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

const infoManager = () => {
    return inquire
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


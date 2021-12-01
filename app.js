// add employee
const Employee = require('./lib/Employee');

new Employee().init();

const fs = require('fs');
const inquirer = require("inquirer");

// Questions for the inquirer prompt 
const questions = [
    {
        type: 'input',
        name: 'employee_name',
        message: 'What is the employees name?',
        default: 'Plaindemon'        
    },
    {
        type: 'input',
        name: 'employee_id',
        message: 'What is the employees id number?',
        default: 'undefined'
    },
    {
        type: 'input',
        name: 'employee_email',
        message: 'What is the employees email address?',
        default: 'no@noemail.com'
    },
    {
        type: 'checkbox',
        name: 'position',
        message: 'What position does the employee occupy?',
        choices: ['Manager', 'Intern', 'Engineer', 'Employee'],
        default: 'Employee'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineers github username?'
    },
    {
        type: 'input',
        name: 'schoolId',
        message: 'What school does this student attend?'
  }];

// Define class using class declaration
class Employee{
    // Initializes object created with class
    constructor() {
        // The 'this' keyword refers to the current object
        // this.name = [''];
        // this.id = [''];
        // this.email  = [''];
        // this.position = [''];
    }
    init() {
        console.log('\\----------Create a New Team Member----------//');
          inquirer
          .prompt(questions)
          .then(({ answers, employee, employee_id, employee_email, position }) => {
            this.employee.push(new Employee(this.name));
            this.employee_id.push(new Employee(this.id));
            // this.employee_email.push(Employee(this.email));  
            // this.position.push(Employee(this.position));
        })
        // console.log('//////-----------------New employee created -----------------------/////')
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
              } else {
                // Something else went wrong
              }
          })
        //   console.log('next line')
        }
        
}

module.exports = Employee;



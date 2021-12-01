// add employee
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const fs = require("fs");
const inquirer = require("inquirer");

// Questions for the inquirer prompt
const questions = [
  {
    type: "input",
    name: "employee_name",
    message: "What is the employees name?",
    default: "Plaindemon",
  },
  {
    type: "input",
    name: "employee_id",
    message: "What is the employees id number?",
    default: "undefined",
  },
  {
    type: "input",
    name: "employee_email",
    message: "What is the employees email address?",
    default: "no@noemail.com",
  },
  {
    type: "checkbox",
    name: "position",
    message: "What position does the employee occupy?",
    choices: ["Manager", "Intern", "Engineer"],
    default: "Intern",
  },
];

const engineerQ = [
  {
    type: "input",
    name: "github",
    message: "What is the engineers github username?",
  },
];
const internQ = [
  {
    type: "input",
    name: "schoolId",
    message: "What school does this student attend?",
  },
];
const managerQ = [
  {
    type: "input",
    name: "office",
    message: "What office does this manager run?",
  },
];

function init() {
  console.log("\\----------Create a New Team Member----------//");
  inquirer
    .prompt(questions)
    .then(({ employee_name, employee_id, employee_email, position }) => {
      console.log(position[0]);
      // switch(position){
      //     case
      // }
    })
    // console.log('//////-----------------New employee created -----------------------/////')
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  //   console.log('next line')
}



init();

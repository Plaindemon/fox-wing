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
  }]
const isPosition = [
  {
    type: "list",
    name: "position",
    message: "What position does the employee occupy?",
    choices: ["Manager", "Intern", "Engineer","Exit App"],
    default: "Intern",
  }
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
const managerList = [];
const internList = [];
const engineerList = [];
function init() {
  console.log("\\----------Create a New Team Member----------//");
  inquirer
    .prompt(isPosition)
    .then(({ position }) => {
      console.log(position);
      switch(position){
          case "Manager":
             managerQuestion = questions.concat(managerQ);
             addMan(managerQuestion);
             break;

          case "Engineer":
            engineerQuestion = questions.concat(engineerQ);
            addEng(engineerQuestion);
            break;

            case "Intern":
                internQuestion = questions.concat(internQ);
                addInt(internQuestion);
                break;

           default:
                generateHTML()
        }
    }).catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  //   console.log('next line')
}
function generateHTML() {
    console.log(engineerList, managerList, internList);
}

function addMan(managerQuestion){
    inquirer.prompt(managerQuestion)
    .then(({office}) => {
        const teamManager = new Manager(office)
        managerList.push(teamManager)
        init()
    });
}
function addInt(internQuestion){
    inquirer.prompt(internQuestion)
        .then(({school}) => {
            const teamIntern = new Intern(school)
            internList.push(teamIntern)
            init()
    })
}
function addEng(engineerQuestion){
    inquirer.prompt(engineerQuestion)
            .then(({github}) => {
                const teamEngineer = new Engineer( github)
              engineerList.push(teamEngineer)
               init()
            });
}

init();

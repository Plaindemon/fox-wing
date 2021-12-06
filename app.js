
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const generate = require("./lib/generateHTML");



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
}];
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

// empty array
const managerList = [];
const internList = [];
const engineerList = [];

// function to initiate the employee prompt
function init() {
  console.log("\\----------Create a New Team Member----------//");
  inquirer
    .prompt(isPosition)
    .then(({ position }) => {
      // console.log the position to check the data
      console.log(position);
      // switch case to get value from position then if it is manager, intern or engineer then it runs a different but almost identical display
      switch(position){
        // Prompt gets position value for manager
          case "Manager":
             managerQuestion = questions.concat(managerQ);
             addMan(managerQuestion);
             break;
        // Prompt get github value for engineer
          case "Engineer":
            engineerQuestion = questions.concat(engineerQ);
            addEng(engineerQuestion);
            break;
        // Prompt get school value for intern 
            case "Intern":
                internQuestion = questions.concat(internQ);
                addInt(internQuestion);
                break;
        // if the user chooses the last prompt it then it exits from the list and command has to be rerun in order to add another new employee
           default:
                generateHTML(position)
                // console log test to see if it is reading to exit
                console.log(" ----------> EXIT <-----------")
        }
    }).catch((error) => {
     console.log(error);
  //   console.log('next line')
    })
}

// addMan gets the managerQuestion 
function addMan(managerQuestion){
  // then it runs the inquirer prompt from the switch case 
    inquirer.prompt(managerQuestion)
    // the then it runs 
    .then((office) => {
      console.log(office)
        const teamManager = new Manager(office)
        managerList.push(teamManager)
        console.log(managerList)
        init()
    });
}
function addInt(internQuestion){
    inquirer.prompt(internQuestion)
        .then((school) => {
            const teamIntern = new Intern(school)
            internList.push(teamIntern)
            init()
    })
}
function addEng(engineerQuestion){
    inquirer.prompt(engineerQuestion)
            .then((github) => {
                const teamEngineer = new Engineer( github)
              engineerList.push(teamEngineer)
               init()
            });
}

init();

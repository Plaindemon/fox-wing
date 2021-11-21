var inquirer = require('inquirer');
const { choices } = require('yargs');
console.log('----------Create a New Team Member----------');

const questions = [
  /* Pass your questions in here */
  {
    type: 'confirm',
    name: 'start',
    message: 'Would you like to create a new team member?'
    
  },
  {
    type: 'checkbox',
    name: 'position',
    message: 'What position does the employee occupy?',
    choices: ['Manager', 'Intern', 'Engineer', 'Developer', 'Employee'],
    default: 'Employee'
  },
   // add if statements that add additional prompts if engineer, intern, etc
  {
    type: 'input',
    name: 'Employee_Name',
    message: 'What is the employees name? (last name, first name)',
    default: 'Lastname, firstname'
  },
  {
    type: 'input',
    name: 'Employee_Id',
    message: 'What is the employees id number?',
    default: 'undefined'
  },
  {
    type: 'input',
    name: 'Employee_Email',
    message: 'What is the employees email address?',
    default: 'no@noemail.com'
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
    console.table(answers)

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error)
    } else {
      // Something else went wrong
      console.log('check errors')
    }
  });

// function index(a, b){
//     return a + b;
// }

// module.exports = index;
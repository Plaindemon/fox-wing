var inquirer = require('inquirer');
const { choices } = require('yargs');
console.log('----------Create a New Team Member----------');

const questions = [
  /* Pass your questions in here */
  // {
  //   type: 'confirm',
  //   name: 'New_Employee',
  //   message: 'Would you like to create a new team member?'
    
  // },
  // {
  //   type: 'input',
  //   name: 'Employee_Name',
  //   message: 'What is the employees name? (last name, first name)',
  //   default: 'Lastname, firstname'
  // },
  // {
  //   type: 'input',
  //   name: 'Employee_Id',
  //   message: 'What is the employees id number?',
  //   default: 'undefined'
  // },
  // {
  //   type: 'input',
  //   name: 'Employee_Email',
  //   message: 'What is the employees email address?',
  //   default: 'no@noemail.com'
  // },
  {
    type: 'checkbox',
    name: 'position',
    message: 'What position does the employee occupy?',
    choices: ['Manager', 'Intern', 'Engineer', 'Employee'],
    default: 'Employee'
  },
   // add if statements that add additional prompts if engineer, intern, etc

];

inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log('Answer:', answers.position)
    // console.table(answers)
    // console.info(answers)
    if(answers.position === ['Engineer']){
      inquirer
        .prompt([
        {
          type: 'input',
          name: 'github',
          message: 'What is the engineers github username?'
        }
      ])
      .then((answers2) => {
        console.log(answers2.github);
      })
    }
    if(answers.position === 'Manager'){
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'office',
            message: 'What is the number of the office this Manager runs?'
          }
        ])
        .then((answers3) => {
          console.log(answers3.office);
        })
    }
    if(answers.position === 'Intern'){
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'schoolId',
            message: 'What school does this student attend?'
          }
        ])
        .then((answers4) => {
          console.log('School:', answers4.schoolId);
        })
    }
    
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
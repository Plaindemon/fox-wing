const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee');
const { mockEmployee } = require('./Employee');
const getGithub = require('./Engineer');
const getSchool = require('./Intern');
const getOffice = require('./Manager');

// Questions for the inquirer prompt 
const questions = [{
    type: 'input',
    name: 'employee_name',
    message: 'What is the employees name?',
    default: 'Plaindemon'        
},
// {
//     type: 'input',
//     name: 'employee_id',
//     message: 'What is the employees id number?',
//     default: 'undefined'
// },
// {
//     type: 'input',
//     name: 'employee_email',
//     message: 'What is the employees email address?',
//     default: 'no@noemail.com'
// },
// {
//     type: 'checkbox',
//     name: 'position',
//     message: 'What position does the employee occupy?',
//     choices: ['Manager', 'Intern', 'Engineer', 'Employee'],
//     default: 'Employee'
// }
]

function getEmployee(){
  console.log('\\---------- Create a New Team Member ----------//');
  inquirer
      .prompt(questions)
      
      .then((answers, employee, employee_id, employee_email, position) => {
          // gets value from object
          this.employee = new Employee(employee);
          this.employee_id = new Employee(employee_id);
          this.employee_email = new Employee(employee_email);  
          this.position = new Employee(position); 

          // let result = [];
          // for(let index = 0; index < data.length; index++){
          //     let element = data[index];
          //     result.push(cb(element, index));
          // }
          
  

          console.log(answers)
          console.log(employee)
          // console.log(employee_id)
          // console.log(employee_email)
          // console.log(position)

          // answers created to get value from question answers
          // const answers = questions.values('');

          //function to display the answers in an index to the console -- delete or refactor for later use
          questions.forEach(function (answers, index){
              console.log(index + '. ' + answers[1]);
          });
          return result;
      })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
  })
}; 

// Method which prints all of the stats for a Employee
function viewEmployee() {
  let  = mockEmployee.viewEmployee();
  // console.log(`Employee Id: ${this.id}`);
  // console.log(`Employee email: ${this.email}`);
  // console.log(`Employee Position: ${this.position}`);
  // console.log('------------');
  console.log(mockEmployee)
}

console.log(viewEmployee)



// CREATE html file
// console.log(questions);
// console.log(answers);

// TODO: Create a function to write Index file
function writeToFile(fileName, data) {
  fs.writeFile('index.html', 'INSERT INFO HERE', function (err) {
    if (err) throw err;
    console.log('Saved!');
  })
}

console.log(writeToFile())



getEmployee();
  // get role function

  // get github function

  // get school function

// // TODO: Create a function to write HTML file
// function writeToFile(fileName, data) {
//     fs.writeFile('README.md', 'Hello Content!', function (err) {
//       if (err) throw err;
//       console.log('Saved!');
//     })
//   }

//   console.log(writeToFile())

// TODO: Create a function to initialize app
function init() {}
  
// Function call to initialize app
init();

// // module.exports = index;
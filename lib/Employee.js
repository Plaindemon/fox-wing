const fs = require('fs');
const inquirer = require('inquirer');


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

// Define class using class declaration
class Employee{
    // Initializes object created with class
    constructor(employee, employee_id, employee_email, position) {
        // The 'this' keyword refers to the current object
        this.name = employee;
        this.id = employee_id;
        this.email  = employee_email;
        this.position = position;
    }

// Method which prints all of the stats for a Employee
viewEmployee() {
    console.log(`Employee: ${this.name}`);
    // console.log(`Employee Id: ${this.id}`);
    // console.log(`Employee email: ${this.email}`);
    // console.log(`Employee Position: ${this.position}`);
    // console.log('------------');
    }

}
// Creates unique employee using the "employee" constructor
const plain = new Employee('Plain', 567689, 'plain@demon.com', 'Manager');

plain.viewEmployee();
// const turnInterval = setInterval(() => {
  // use if else if and else statement to get the different questions
// }, 2000);

//
//get employee 
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
// CREATE html file
// console.log(questions);
// console.log(answers);
// fs.writeFile("index.html", (answers), process.argv[2], function(err) {

// if (err) {
// return console.log(err);
// }

// console.log("Success!");

// });
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

module.exports = getEmployee;
module.exports = Employee;



const fs = require('fs');
const inquirer = require('inquirer');


// Questions for the inquirer prompt 
const questions = [{
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
}]
//
class Employee{
    constructor() {
        this.name = [];
        this.id = [];
        this.email = [];
        this.position =[];
    }
    // get id function
    // getId() {
        // this.id.push(new )
    // }
    // // get email function
}
//
//get employee 
function getEmployee(){
    console.log('\\---------- Create a New Team Member ----------//');
    inquirer
        .prompt(questions)
        
        .then((answers, name, id, email, position) => {
            // answers created to get value from question answers
            // const answers = questions.values('');

            //function to display the answers in an index to the console -- delete or refactor for later use
            questions.forEach(function (eachName, index){
                console.log(index + '. ' + eachName);
            });

            // gets value from object
            this.employee = new Employee(name);
            this.employee_id = new Employee(id);
            this.employee_email = new Employee(email);  
            this.position= new Employee(position); 


            // CREATE readme file
            console.log(questions);
            console.log(answers);
            fs.writeFile("index.html", (answers), process.argv[2], function(err) {
    
            if (err) {
            return console.log(err);
            }
      
            console.log("Success!");
      
            });
            fs.readFile("index.html", "utf8", function(error, log) {

            if (error) {
                return console.log(error);
            }
                
            console.log(log);
                
            });
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
    })
}; 

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



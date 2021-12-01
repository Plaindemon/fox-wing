const fs = require('fs');
const inquirer = require('inquirer');
const { run } = require('jest-cli');
const Employee = require('./lib/Employee');

// })()
// .then(console.log)

// .catch(console.error);

// function getEmployee(){
//   console.log('\\---------- Create a New Team Member ----------//');
 
  
//   // use async to ask different questions based on job response 
//   const run = async () => {
//   const employee = inquirer.prompt(questions);
//   // second await statement to get github from Engineer js
//   // const github = await inquirer.prompt(getGithub);
//   // // // second await statement to get github from Manager js
//   // const office = await inquirer.prompt(getOffice);
//   // // // second await statement to get github from intern js
//   // const school = await (getSchool);
//   }

//   // console.log(this.employee);
//   // console.log(this.office);
//   // console.log(school);
  
//   // return { questions, github, school, office };

//       run().then((answers) => {
//           // gets value from object
          

//           // answers created to get value from question answers
//           // const answers = questions.values('');

//           //function to display the answers in an index to the console -- delete or refactor for later use
//           questions.forEach(function (answers, index)
//           {
//               console.log(index + '. ' + answers[1]);
//           });
//           return result;
//       })
//     .catch((error) => {
//       if (error.isTtyError) 
//       {
//         // Prompt couldn't be rendered in the current environment
//       } else {
//         // Something else went wrong
//       }
//   })
// }; 

// Method which prints all of the stats for a Employee
// function viewEmployee() {
//   let  = mockEmployee.viewEmployee();
//   // console.log(`Employee Id: ${this.id}`);
//   // console.log(`Employee email: ${this.email}`);
//   // console.log(`Employee Position: ${this.position}`);
//   // console.log('------------');
//   console.log(mockEmployee)
// }

console.log(getEmployee)


getEmployee();
// CREATE html file
// console.log(questions);
// console.log(answers);

// TODO: Create a function to write Index file
// function writeToFile(fileName, data) {
//   fs.writeFile('index.html', 'INSERT INFO HERE', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   })
// }

// console.log(writeToFile())




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
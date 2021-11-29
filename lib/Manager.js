const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

// const functions = {
//     add: (num1, num2) => num1 + num2
// }

// module.exports = functions;
function getOffice(){
    // connect this inquirer question to the ones in employee


    // inquirer to find out the office number of the Manager
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

module.exports = getOffice;
const inquirer = require('inquirer');


function getSchool(){
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

module.exports = getSchool;
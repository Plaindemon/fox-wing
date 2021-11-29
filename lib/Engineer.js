const inquirer = require('inquirer');

// const functions = {
//     add: (num1, num2) => num1 + num2
// }



function getGithub(){
    inquirer
        .prompt({
          type: 'input',
          name: 'github',
          message: 'What is the engineers github username?'
    })
        .then(({ github }) => {
            this.employee = new Employee(github);
        });
}
console.log(getGithub());



// module.exports = functions;
module.exports = getGithub;
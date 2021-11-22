// const functions = {
//     add: (num1, num2) => num1 + num2
// }

// module.exports = functions;

function getGithub(){
    inquirer
        .prompt({
          type: 'input',
          name: 'github',
          message: 'What is the engineers github username?'
        })
        .then(({ name }) => {
            this.employee = new Employee(name);
        });
}
console.log(getName());
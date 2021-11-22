const inquirer = require('inquirer');
class Employee{
    constructor() {
        this.name = [];
        this.id = [];
        this.email = [];
    }
    // get id function
    // getId() {
        // this.id.push(new )
    // }
    // // get email function
}
    //get name function
function getName(){
    inquirer
        .prompt({
            type: 'input',
            name: 'Employee_Name',
            message: 'What is the employees name? (last name, first name)',
            default: 'Lastname, firstname'
                    
        })
        .then(({ name }) => {
            this.employee = new Employee(name);
        });
}
console.log(getName());
    // get role function

    // get github function

    // get school function




module.exports = Employee;

// const { test } = require("picomatch");
// function Employee(name) {
//     this.name = name;
    
    // this.id = id + '';
    // this.email = email + '';
    // this.role = role + '';
// }

// new Employee('Ben', '678909876', 'email@email.com', 'front end development');
// console.log(Employee);


// module.exports = Employee;
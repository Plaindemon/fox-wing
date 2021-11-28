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
        // // {
        // // type: 'confirm',
        // // name: 'New_Employee',
        // // message: 'Would you like to create a new team member?'
        
        // // },
        // {
        //     type: 'input',
        //     name: 'Employee_Id',
        //     message: 'What is the employees id number?',
        //     default: 'undefined'
        // },
        // {
        //     type: 'input',
        //     name: 'Employee_Email',
        //     message: 'What is the employees email address?',
        //     default: 'no@noemail.com'
        // },
        // {
        //     type: 'checkbox',
        //     name: 'position',
        //     message: 'What position does the employee occupy?',
        //     choices: ['Manager', 'Intern', 'Engineer', 'Employee'],
        //     default: 'Employee'
        // })
        .then(({ name}) => {
            this.employee = new Employee(name);
            // this.employee_id = new Employee(id);
            // this.employee_email = new Employee(email);
        });
}
console.log(getName());
    // get role function

    // get github function

    // get school function



module.exports = getName;
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

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

}

// Creates unique employee using the "employee" constructor
const mockEmployee =[ 
    new Employee('Plain', 567689, 'plain@demon.com', 'Manager')
];


// const turnInterval = setInterval(() => {
  // use if else if and else statement to get the different questions
// }, 2000);

// get employee 

// TODO: Create a function to initialize app
function init() {}
  
// Function call to initialize app
init();


module.exports = Employee;



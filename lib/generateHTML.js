const generate = require("app.js");
// const { fstat } = require("fs");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

// TODO: Create a function to generate markdown for README
function generateHTML(managerList, internList, engineerList) {
  // put for loops here to return the html file content
  console.log(engineerList, managerList, internList);
  console.log("I am here and working")
  // add a for loop for each one because it is an array
  for(var i = 0; i < managerList.length; i++){
    // add template literal in here
    const employee = `<div>
    <p>${Manager.name.position}</p>
    <p>${Manager.name.employee_name}</p>
    <p>${Manager.name.employee_id}</p>
    <p>${Manager.name.employee_email}</p>
    
    <p>${Manager.name.office}</p>
  </div>
`
  console.log(employee);
  fs.appendFileSync(generateHTML, Employee, "utf8")
  }
  for(var i = 0; i < internList.length; i++){
    // add template literal in here
    const employee = `<div>
    <p>${Intern.name.position}</p>
    <p>${Intern.name.employee_name}</p>
    <p>${Intern.name.employee_id}</p>
    <p>${Intern.name.employee_email}</p>
    <p>${Intern.name.schoolId}</p>
    
  </div>
`
  console.log(employee);
  fs.appendFileSync(generateHTML, Employee, "utf8")
  }
  for(var i = 0; i < engineerList.length; i++){
    // add template literal in here
    const employee = `<div>
      <p>${Engineer.name.position}</p>
      <p> ${Engineer.name.employee_name}</p>
      <p>${Engineer.name.employee_id}</p>
      <p>${Engineer.name.employee_email}</p>
      <p>${Engineer.name.github}</p>
      
    </div>
  `
  console.log(employee);
  fs.appendFileSync(generateHTML, Employee, "utf8")
  }
  // for loop for manager, intern, engineer
  // manager.name.employee
  // appendFileSync
  // using a template literal to put information on the page

    return `
    <div>
    <h2>Employee</h2>
    </div>
  `;
}
  
module.exports = generateHTML;

// for(var i = 0; i < managerList.length; i++){
//   const employee = `<div>
//   <p> ${Manager.name.employee_name}</p>
//   <p>${Manager.name.employee_id}</p>
//   </div>
//   `
//   fstat.appendFileSync(generateHTML, Employee)
// }
  
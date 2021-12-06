const generate = require("app.js");
const fs = require("fs");
// const { fstat } = require("fs");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");


// use .map to generate html
// managerList.map()
const generateHTML = (managerList, internList, engineerList) => {
  // use write file to create file
  fs.writeFile("../dist/team.html", generatePage(managerList, internList, engineerList), function (err) {
    if (err)
      console.log(err);
    // else {
    //   console.log("File written successfully")

    //   // console.log(fs.readFile("team.html", "utf8"));
    // }

    // put for loops here to return the html file content
    
    // add a for loop for each one because it is an array
    for (var i = 0; i < managerList.length; i++) {
      // add template literal in here
      const employee = `<div class="card">
          <h2>${Manager.name.position}</h2>
          <p class="subheader">${Manager.name.employee_name}</p>
          <p>${Manager.name.employee_id}</p>
          <p>${Manager.name.employee_email}</p>
          
          <p>${Manager.name.office}</p>
        </div>
      `
    }
    // console.log(employee);
    // fs.appendFile(generateHTML, Employee, function (err) {

    //   // If an error occurred, show it and return
    //   if (err) return console.error(err);
    // })

    for (var i = 0; i < internList.length; i++) {
      // add template literal in here
      const employee = `<div class="card">
            <h2>${Intern.name.position}</h2>
            <p class="subheader">${Intern.name.employee_name}</p>
            <p>${Intern.name.employee_id}</p>
            <p>${Intern.name.employee_email}</p>
            <p>${Intern.name.schoolId}</p>
            
              </div>
            `
      //   console.log(employee);
      //   fs.appendFile(generateHTML, Employee, "utf8")
    }
    for (var i = 0; i < engineerList.length; i++) {
      // add template literal in here
      const employee = `<div class="card">
      <h2>${Engineer.name.position}</h2>
      <p class="subheader"> ${Engineer.name.employee_name}</p>
      <p>${Engineer.name.employee_id}</p>
      <p>${Engineer.name.employee_email}</p>
      <p>${Engineer.name.github}</p>
      
      </div>
      `
      console.log(employee);
      fs.appendFile(generateHTML, Employee, "utf8")
    }
    // for loop for manager, intern, engineer
    // manager.name.employee
    // appendFileSync
    // using a template literal to put information on the page

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
       <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
          <title>TEAM PROFILE</title>
        </head>
        <body>
          <nav class="navbar navbar-expand-lg bg-info"><strong>Team Profile</strong></nav>
              <br>
          <div class="card text-center" style="width: 20rem;">
              <div class="card-header">
                  Employee
                </div>
                <div class="card-body">
                    <p class="card-text">TEXT</p>
                </div>
          </div>
          
        </body>
  </html>
      `;
})};



// console.log(fs.readFile("team.html", "utf8"));
module.exports = generateHTML;

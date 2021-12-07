// const generate = require("app.js");
const fs = require("fs");


const generateHTML = (managerList, internList, engineerList) => {
  // use write file to create file
  
    // else {
    //   console.log("File written successfully")

    //   console.log(fs.readFile("team.html", "utf8"));
    // }
     let employeeHTML = ""
    
    // add a for loop for each one because it is an array
    for (var i = 0; i < managerList.length; i++) {
      // add template literal in here
     employeeHTML += ` <div class="card text-center" style="width: 20rem;">
     <div class="card-header">
      <h2>Manager</h2>
      </div>
<div class="card-body">    
      <p class="subheader">${managerList[i].name}</p>
      <p>${managerList[i].id}</p>
      <a href="mailto:${managerList[i].email}">${managerList[i].email}</a>
      
      <p>${managerList[i].office}</p>
      </div> 
    </div>
  `
    }

  //   let manager = managerList.map(function(office){
  //     return office;
  //   })

    for (var i = 0; i < internList.length; i++) {
      // add template literal in here
      employeeHTML += `   <div class="card text-center" style="width: 20rem;">
      <div class="card-header">
            <h2>Intern</h2>
            </div>
                <div class="card-body">
                    
            <p class="subheader">${internList[i].name}</p>
            <p>${internList[i].id}</p>
            <a href="mailto:${internList[i].email}">${internList[i].email}</a>
            <p>${internList[i].school}</p>
            </div> 
              </div>
            `
    }
    for (var i = 0; i < engineerList.length; i++) {
      // add template literal in here
      employeeHTML += `   <div class="card text-center" style="width: 20rem;">
      <div class="card-header">
      <h2>Engineer</h2>
      </div>
                <div class="card-body">
                    
      <p class="subheader"> ${engineerList[i].name}</p>
      <p>${engineerList[i].id}</p>
      <a href="mailto:${engineerList[i].email}">${engineerList[i].email}</a>
      <a href="https://github.com/${engineerList[i].github}">Github: https://github.com/${engineerList[i].github}</p>
      </div> 
      </div>
      `
     

    }
    // for loop for manager, intern, engineer
    // manager.name.employee
    // appendFileSync
    // using a template literal to put information on the page

    let htmlFile =  `
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
              ${employeeHTML}
          <div class="card text-center" style="width: 20rem;">
              <div class="card-header">
                  Employee Position: 
                </div>
                <div class="card-body">
                    
                    
                </div> 
          </div>
          
        </body>
  </html>
      `;
      fs.writeFile("./dist/index.html", htmlFile,function(err){
        if (err) throw err;
      })

   console.log("File generated Hooray!")
}


{/* <p class="card-text">Employee Id: ${}</p>
 <p class="card-text">Employee Name: ${}</p>
<p class="card-text">Employee Email: ${} </p> */}

// console.log(fs.readFile("team.html", "utf8"));
module.exports = generateHTML;

const inquirer = require('inquirer');

// TODO: Create a function to generate markdown for README
function generateHTML(answers) {
    return `
    # ${answers.title}
  
    ## Description:
    ${answers.title}
  
    ## Table of Contents
    - [Description](#description)
    - [License](#license)
    - [Contact Me](#contact)
    - [Github](#github)
    - [Contributors](#contribution)
    - [Instillation](#install)
  
  
    ## Github
    -- [${answers.github}](https://github.com/${answers.github})
  `;
  }
  
  module.exports = generateHTML;
  
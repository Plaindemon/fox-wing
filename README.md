# fox-wing
Team profile generator app
## Github repository
https://github.com/Plaindemon/fox-wing

## Video Demonstration Walk-through
[Video Walkthrough](https://watch.screencastify.com/v/5XaP7iEGMuPEKwVY14Vg)

## Screenshot of HTML file
![Screenshot of generatedhtml file and the file open in the browser <img src="images/screenshot.png" width="250"/>](images/screenshot)

## Description
 This is a team profile generator that uses inquirer to prompt the user for the employees name, email, id#, and then that data is used to create a team profile html file with all the populated data 

 ## Installation instructions
 -- download or clone repository from github 
 -- once downloaded open the command terminal 
 -- In the terminal run the command node app.js to begin the prompts 
 -- Answers all prompts and it will run through and then restart so you can add more than one employee to the team
 -- If there are no other employees that need to be added then use the arrow keys to select exit app
 -- Then the generated HTML file will be located in the dist folder
 

## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria 

* GIVEN a command-line application that accepts user input
* WHEN I am prompted for my team members and their information
* THEN an HTML file is generated that displays a nicely formatted team roster based on user input

* WHEN I click on an email address in the HTML
* THEN my default email program opens and populates the TO field of the email with the address

* WHEN I click on the GitHub username
* THEN that GitHub profile opens in a new tab

* WHEN I start the application
* THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

* WHEN I enter the team manager’s name, employee ID, email address, and office number
* THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

* WHEN I select the engineer option
* THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

* WHEN I select the intern option
* THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

* WHEN I decide to finish building my team
* THEN I exit the application, and the HTML is generated
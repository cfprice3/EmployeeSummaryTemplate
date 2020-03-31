console.log("working");


const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const team = [];

function createMgr(){
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
        type: "input",
        message: "What is your ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNum"
    }
  ])
  .then(answers =>{
    // console.log(answers)
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum)
    console.log(manager);
    team.push(manager)
    createTeam();
  })
};

function createTeam (){
    inquirer.prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members"
          ]
        }
      ]).then(userChoice => {
        switch(userChoice.memberChoice) {
        case "Engineer":
            createEng();
        //   addEngineer();
        console.log("create eng");
          break;
        case "Intern":
            createInt();
        //   addIntern();
        console.log("create an intern");
          break;
        default:
        //   buildTeam();
        console.log("buildteam");
        }
      });
  

};

function createEng(){
    inquirer
    .prompt([
      {
        type: "input",
        message: "What is their name?",
        name: "name"
      },
      {
          type: "input",
          message: "What is their ID?",
          name: "id"
      },
      {
          type: "input",
          message: "What is their email?",
          name: "email"
      },
      {
          type: "input",
          message: "What is their GitHub Account?",
          name: "github"
      }
    ]).then(answers =>{
        // console.log(answers)
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        console.log(engineer);
        team.push(engineer)
        createTeam();
        });
};

    function createInt(){
        inquirer
        .prompt([
          {
            type: "input",
            message: "What is their name?",
            name: "name"
          },
          {
              type: "input",
              message: "What is their ID?",
              name: "id"
          },
          {
              type: "input",
              message: "What is their email?",
              name: "email"
          },
          {
              type: "input",
              message: "What is their School?",
              name: "school"
          }
        ]).then(answers =>{
            // console.log(answers)
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            console.log(intern);
            team.push(intern)
            createTeam();
            });
    };

function buildTeam(){

};

createMgr();




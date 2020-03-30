const Employee = require("./Employee")

const inquirer = require("inquirer");

function promptMgr() {
    if (Employee.Manager === Manager)
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is your ID?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
      }
    ]);
  }
console.log(promptMgr())

// function generateHTML(answers) {
//     return `
// <div class="card employee-card">
//     <div class="card-header">
//         <h2 class="card-title">${answers.name}</h2>
//         <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>"Manager"</h3>
//     </div>
//     <div class="card-body">
//         <ul class="list-group">
//             <li class="list-group-item">ID: ${answers.id}</li>
//             <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
//             <li class="list-group-item">Office number: ${answers.officeNumber}</li>
//         </ul>
//     </div>
// </div>`;}

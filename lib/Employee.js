// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

// getName()
Employee.prototype.getName = function () {
    // console.log(this.name);
    return this.name;
}

// getId()
Employee.prototype.getId = function () {
    return this.id;
}

// getEmail()
Employee.prototype.getEmail = function () {
    return this.email;
}

// getRole() // Returns 'Employee' 
Employee.prototype.getRole = function () {
    return "Employee";
}


    // inquirer.prompt(
    //   {
    //     type:"list",
    //     name: "team",
    //     message: "What is job title?",
    //     choices: [
    //         "Manager",
    //         "Developer",
    //         "Intern"
    //     ]
    //   }
    // )};

    // if (choices === "Manager");

        module.exports = 
        Employee
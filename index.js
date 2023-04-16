const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const createHTML = require('./src/crewHTML.js');

const crew =[];

const validation = (nameInput) => nameInput? true: (console.log("You must enter a value to proceed"), false);

const manager = [
    {
        type:'input',
        message: "please enter the name of the manager",
        name: 'name',
        validate: validation,
    },
    {
        type: 'input',
        message: "what is the manager's ID?",
        name:'id',
        validate: id => {
            if(isNaN(id)) {
                console.log("You must enter a numeric ID")
            } else {
                return true;
            }
        },
    },
    {
        type:'input',
        message:"what is the manager's email?",
        name: 'email',
        validate: validation,
    },
    {
        type: 'input',
        message: "what is the manager's office number?",
        name: 'officeNumber',
        validate: validation,
    }

];

const engineer = [
    {
        type: 'input',
        message: "what is the engineer's name?",
        name: 'name',
        validate: validation,

    },
    {
        type: 'input',
        message: "what is the engineer's ID#?",
        name: 'id',
        // if id isNAN, console.log
        validate: id => {
            if(isNaN(id)) {
                console.log("You must enter a numeric ID")
            } else {
                return true;
            }
        },

    },
    {
        type: 'input',
        message: "what is the engineer's email?",
        name: 'email',
        validate: validation,

    },
    {
        type: 'input',
        message: "what is the engineer's Github Username?",
        name: 'github',
        validate: validation,
    },
     
];

const intern = [
    {
        type: 'input',
        message: "what is the intern's name?",
        name: 'name',
        validate: validation,

    },
    {
        type: 'input',
        message: "what is the intern's ID?",
        name: 'id',
        validate: id => {
            if(isNaN(id)) {
                console.log("You must enter a numeric ID")
            } else {
                return true;
            }
        },

    },
    {
        type: 'input',
        message: "what is the intern's email?",
        name: 'email',
        validate: validation,

    },
    {
        type: 'input',
        message: "what is the intern's education?",
        name: 'school',
        validate: validation,
    },
];

function addIntern() {
    inquirer.prompt(intern)
    .then((data) => {
        crew.push( new Intern(data.name, data.id, data.email, data.school));
        createEmployee();
    })

    
};

function addEngineer() {
    inquirer.prompt(engineer)
    .then((data) => {
        crew.push(new Engineer(data.name, data.id, data.email, data.github));
        createEmployee();

    })
    
};

function createEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message:'Please select an option:',
            name: 'nextOption',
            choices: ['Add Engineer', 'Add Intern', 'Crew Assembled'],
        },
    ])
    //options for createTeam function - Team Complete writes the file
    .then((input)=>{
        if (input.nextOption === 'Add Engineer') {
            addEngineer();
        } else if (input.nextOption === "Add Intern") {
            addIntern();
        } else if (input.nextOption === "Crew Assembled") {
            let html = createHTML(crew);
            writeToFile(html);
            console.log(crew);
        }
      }            
    )
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, createHTML(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  }
function init() {
    inquirer.prompt(manager)
    .then((data) => {
        data.role = "Manager";
        crew.push(new Manager(data.name, data.id, data.email, data.officeNumber));
        createEmployee();
        
    });
    
}

init();
 
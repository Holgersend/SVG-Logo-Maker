const inquirer = require("inquirer");


    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter the text up to 3 characters for the logo:',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter a color keyword or a hexadecimal number for the text (e.g, blue, yellow, #f33CEFF, etc.)',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Select a shape for the logo:',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter a color keyword or a hexadecimal number for the shape (e.g, blue, yellow, #f33CEFF, etc.)',
            }
        ]);
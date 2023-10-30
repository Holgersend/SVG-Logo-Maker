const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./shapes");
const fs = require("fs");

    const input = [
            {
                type: 'input',
                name: 'text',
                message: 'Enter the text up to 3 characters for the logo:',
                validate: (nameInput) => {
                    if (nameInput.length <= 3) {
                    return true;
                    } else {
                    console.log("Please enter a logo that is 3 characters or less!");
                    }
                },
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter a color keyword or a hexadecimal number for the text (e.g, blue, yellow, #f33CEFF, etc.)',
                validate: (nameInput) => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log("Please enter a color for your logo text!");
                    }
                },
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Select a shape for the logo:',
                choices: ['Circle', 'Triangle', 'Square'],
                validate: (nameInput) => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log("Please choose a shape!");
                    }
                },
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter a color keyword or a hexadecimal number for the shape (e.g, blue, yellow, #f33CEFF, etc.)',
                validate: (nameInput) => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log("Please enter a color!");
                    }
                },
                
            }
        ];

        function generateSVG(data) {
            let shape
            switch (data.shape) {
                case 'Circle':
                    shape = new shapes.Circle(data.text, data.shapeColor)
                    break
                case 'Triangle':
                    shape = new shapes.Triangle(data.text, data.shapeColor)
                    break
                case 'Square':
                    shape= new shapes.Square(data.text, data.shapeColor)
                    break
            }
            
            let svg = 
            `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
            <svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
                ${shape.render()}
                <text x="50%" y="50%" font-size="4.5vw" dominant-baseline="middle" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
            </svg>`;

            fs.writeFile('./examples/logo.svg', svg, (err) => {
                if (err) throw err;
                console.log('Generated logo.svg');
            })
        }
        function init() {
            inquirer.prompt(input).then(data => {
                generateSVG(data)
            })
        }
        
        init()

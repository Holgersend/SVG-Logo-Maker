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
            const { text, textColor, shape, shapeColor } = data;
            let svgString = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;
        
            let shapeElement;
        
            // Create an instance of the selected shape based on the input
            if (shape === 'Circle') {
                shapeElement = new Circle(text, shapeColor);
            } else if (shape === 'Square') {
                shapeElement = new Square(text, shapeColor);
            } else if (shape === 'Triangle') {
                shapeElement = new Triangle(text, shapeColor);
            } else {
                // Handle invalid shape here
                console.log('Invalid shape selection');
                return null;
            }
            svgString += shapeElement.render();
            svgString += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;

            // Close the SVG tag
            svgString += `</svg>`;
            const svgData = generateSVG(data);
            console.log(svgData);

            fs.writeFile('./examples/logo.svg', svg, (err) => {
                if (err) throw err;
                console.log('Generated logo.svg');
            })
        }
        
        // Using the init function to call each function in order so the data is collected before the SVG is formed
        function init() {
            inquirer.prompt(input).then(data => {
                generateSVG(data)
            })
        }
        
        init();
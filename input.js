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
            }
        ];

module.exports = {input};
const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./shapes");
const { input } = require("./input");

class Svg{
    constructor(){
        this.text = ''
        this.shape = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape}${this.text}</svg>`
    }
    setText(text,color){
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shape = shape.render()

    }
    
}

function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations you Generated a logo.svg!");
    });
}

async function init() {
    console.log("Starting init");
    var svgString = "";
    var svg_file = "logo.svg";
    
    
    const answers = await inquirer.prompt(input); 
    var user_text = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        user_text = answers.text;
    } else {
        console.log("Invalid  text field! Please enter 1-3 Characters");
        return;
    }
    console.log("User text: [" + user_text + "]");

    user_font_color = answers["text-color"];
    console.log("User font color: [" + user_font_color + "]");

    user_shape_color = answers.shape;
    console.log("User shape color: [" + user_shape_color + "]");
    
    user_shape_type = answers["pixel-image"];
    console.log("User entered shape = [" + user_shape_type + "]");
    
    
    let user_shape;
    if (user_shape_type === "Square" || user_shape_type === "square") {
        user_shape = new Square();
        console.log("User selected Square shape");
    }
    else if (user_shape_type === "Circle" || user_shape_type === "circle") {
        user_shape = new Circle();
        console.log("User selected Circle shape");
    }
    else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
        user_shape = new Triangle();
        console.log("User selected Triangle shape");
    }
    else {
        console.log("Invalid shape!");
    }
    user_shape.setColor(user_shape_color);
    
    // Create a new Svg instance and add the shape and text elements to it
    var svg = new Svg();
    svg.setTextElement(user_text, user_font_color);
    svg.setShapeElement(user_shape);
    svgString = svg.render();
    
    //Print shape to log
    console.log("Displaying shape:\n\n" + svgString);
    console.log("Writing shape to file...");
    writeToFile(svg_file, svgString); 
}
init()
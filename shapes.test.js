const {Circle, Square, Triangle} = require ('./shapes');

describe('Circle', () => {
    test('test for the shape circle fill with a background color blue', () => {
        const shape = new Circle();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual( '<circle cx="150" cy="115" r="80" fill="blue" />');
    });
});

describe('Square', () => {
    test('test for the shape square fill with a background color black', () => {
        const shape = new Square();
        var color =('black')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});

describe('Triangle', () => {
    test('test for the shape triangle fill with a background color red', () => {
        const shape = new Triangle();
        var color =('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
});

module.exports = {Circle, Square, Triangle}
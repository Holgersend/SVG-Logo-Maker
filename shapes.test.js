const {circle} = require ('./shapes');

describe('circle', () => {
    test('test for the shape circle fill with a background color blue', () => {
        const shape = new circle();
        shape.setShapeColor('blue');
        expect(shape.render()).toEqual( '<circle cx="150" cy="115" r="80" fill="blue" />');
    });
});
class shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = (color);
    }
}

class circle {
    render(){
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    };
};
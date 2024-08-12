class Shape {
    constructor(shapeColour, text, textColour) {
        this.shapeColour = shapeColour;
        this.text = text;
        this.textColour = textColour;
    }
};

class Circle extends Shape { 
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour);
    };
    render() {
        return  `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColour}"/>
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>
        `
    };
};

class Square extends Shape {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour);
    };
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="${this.shapeColour}"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>
        `
    };
};

class Triangle extends Shape {
    constructor(shapeColour, text, textColour) {
        super(shapeColour, text, textColour);  
    };
    render() {
        return `
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColour}"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>
        `
    };
};

function drawLogo(response) {

    if (response.shape === 'Circle') {
        let shape = new Circle (response.shapeColour, response.text, response.textColour)
        return shape.render()
    }

    if (response.shape === 'Square') {
        let shape = new Square (response.shapeColour, response.text, response.textColour)
        return shape.render()
    }

    if (response.shape === 'Triangle') {
        let shape = new Triangle (response.shapeColour, response.text, response.textColour)
        return shape.render()
    }
};

module.exports = drawLogo;
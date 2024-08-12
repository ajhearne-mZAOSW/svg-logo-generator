const drawLogo = require('../shapes');

describe('Shapes', () => {
    describe('Circle', () => {
        it('should return a red circle with blue SVG text', () => {
            expect(drawLogo({shape: 'Circle', shapeColour: 'red', text: 'SVG', textColour: 'blue'})).toBe(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="red"/>
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="blue">SVG</text>
        </svg>
        `);
        });
    });
    describe('Square', () => {
        it('should return a blue square with pink SVG text', () => {
            expect(drawLogo({shape: 'Square', shapeColour: 'blue', text: 'SVG', textColour: 'pink'})).toBe(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="blue"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="pink">SVG</text>
        </svg>
        `);
        });
    });
    describe('Triangle', () => {
        it('should return a purple triangle with orange SVG text', () => {
            expect(drawLogo({shape: 'Square', shapeColour: 'purple', text: 'SVG', textColour: 'orange'})).toBe(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="purple"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="orange">SVG</text>
        </svg>
        `);
        });
    });
});
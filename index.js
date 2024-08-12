const fs = require('fs');
const inquirer = require('inquirer');
const drawLogo = require('./lib/shapes');

inquirer
    .prompt([
        {
            type: "list",
            name: "shape",
            message: "What shape do you want your logo to be?",
            choices: ["Circle", "Square", "Triangle"],
        },
        {
            type: "input",
            name: "shapeColour",
            message: "What colour do you want your logo to be? [Enter a colour name or hex code]:",
        },
        {
            type: "input",
            name: "text",
            message: "What text do you want to appear on your logo? [Enter up to 3 characters only]:",
        },
        {
            type: "input",
            name: "textColour",
            message: "What colour do you want the text to be? [Enter a colour name or hex code]:",
        }
    ])
    .then((response) => {
        const newLogo = drawLogo(response);

        fs.writeFile('./dist/logo.svg', newLogo, (err) => {
            err ? console.log(err) : console.log('Generated logo.svg');
        });
    });
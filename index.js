// requiring inquirer for use on js
const inquirer = require('inquirer');
// requiring file systems for use on js
const fs = require('fs');
// used for taking user input and insert into the readme template
const genMarkdown = ({name, description, install, instructions, contributors,licenses, features, test}) =>
// the readme template
`# <${name}>

## Description

${description}

## Table of Contents (Optional)


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${install}

## Usage

${instructions}
   
    ![alt text](assets/images/screenshot.png)
    

## Credits

${contributors}

## License

${licenses}


## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Features

${features}

## Tests

${test}`
// using the terminal to ask the user questions for the readme 
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining your project...',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please provide instructions for use of your project...',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Are there any project contributors that you would like to include in your README?',
        },
        {
            type: 'checkbox',
            message: 'Would you like to add any of the following licenses?',
            name: 'licenses',
            choices: [' MIT', ' Babel', ' Rails', ' Bash'],
        },
        {
            type: 'input',
            name: 'features',
            message: 'Which features would you like to add?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'please provide examples of how to run project test...',
        },
    ])
    .then((data) => {
        const markdownContent = genMarkdown(data);
// used to create the readme file and attach template + user inputs
        fs.writeFile('README.md', markdownContent, (err) => 
            err ? console.log(err) : console.log('Success!')
        );
    });
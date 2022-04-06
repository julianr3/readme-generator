const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = ({name, description, install, instructions, contributors,licenses, features, test}) =>
`# <${name}>

## Description

${description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

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


## Features

${features}

## Tests

${test}`

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
        // {
        //     type: 'list',
        //     message: 'What is your preferred method of communication?',
        //     name: 'contact',
        //     choices: ['email', 'phone', 'telekinesis'],
        // },
    ])
    .then((data) => {
        const markdownContent = genMarkdown(data);

        fs.writeFile('README.md', markdownContent, (err) => 
            err ? console.log(err) : console.log('Success!')
        // const filename = `${data.name.toUpperCase().split(' ').join('')}.md`;

        // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        //     err ? console.log(err) : console.log('Success!')
        );
    });
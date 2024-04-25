const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Assets/Scripts/GenerateMarkdown');

inquirer.prompt ([
{
        name: 'logo',
        type: 'input',
        message: 'Please provide your logo image information. (./Logo/File/Path.svg)'
    }, {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project? Choose a unique and self-explaining name for your project.'
    }, {
        'name': 'titleAlt1',
        'type': 'input',
        message: 'Please retype your project title, but instead of spaces use underscores. This will be used for your Applciation Link Badge.'
    }, {
        'name': 'titleAlt2',
        'type': 'input',
        message: 'Please retype your project title EXACTLY, but instead of spaces use dashes and only use lowercase characters.'
    }, {
        name: 'briefDescription',
        type: 'input',
        message: 'Please enter a brief (one sentence) description of your project.'
    }, {
        name: 'username',
        type: 'input',
        message: 'What is your GitHub username? (Required)'
    }, {
        name: 'GitHub',
        type: 'input',
        message: 'Please provide a link to your GitHub profile. (Required)'
    }, {
        name: 'GitHubIssue',
        type: 'input',
        message: "Please provide a link to this repository's issues page. (Required)"
    }, {
        name: 'email',
        type: 'input',
        message: 'What is your email? (Required)'
    }, {
        name: 'deployedURL',
        type: 'input',
        message: 'Please provide a link to the deployed application. (Required)'
    }, {
        name: 'projectGIF',
        type: 'input',
        message: "Please provide your project's GIF visual information. ![GIF Name](GIF/File/Path.svg)"
    }, {
        name: 'descriptionWhat',
        type: 'input',
        message: 'What was your motivation for this project, what problem does it solve, what did you learn, what problems did you run into, and what makes your project stand out? (Required)'
    }, {
        name: 'descriptionWhy',
        type: 'input',
        message: 'Why did you build this project?'
    }, {
        name: 'descriptionHow',
        type: 'input',
        message: 'How will someone use your project, and how did you overcome any challenges that you faced during the development process?'
    }, {
        name: 'userStory',
        type: 'input',
        message: 'What is your user story? (Include backticks for fenced code blocks)'
    }, {
        name: 'acceptanceCriteria',
        type: 'input',
        message: 'What are your acceptance criteria? (Include backticksfor fenced code blocks)'
    }, {
        name: 'keyFeatures',
        type: 'input',
        message: 'What are the key features of your project?'
    }, {
        name: 'installation',
        type: 'input',
        message: 'What are the steps required to install your project? Please provide a step-by-step description of how to get the development environment running and any dependencies that are required to be installed.'
    }, {
        name: 'usage',
        type: 'input',
        message: 'What instructions and examples would be helpful to include for someone trying to use your project?'
    }, {
        name: 'visuals',
        type: 'input',
        message: 'Are there any visuals and/or screenshots that you would like to include in your README file?'
    }, {
        name: 'testing',
        type: 'input',
        message: 'How can tests be run for your project? Provide tests for your project, the command(s) to run the tests, and examples of how to run the tests. (Optional)'
    }, {
        name: 'contributing',
        type: 'input',
        message: 'If you would like other developers to contribute to your project, state that here.'
    }, {
        name: 'contributingRoadmap',
        type: 'input',
        message: "Describe your project's roadmap."
    }, {
        name: 'contributingProjectStatus',
        type: 'input',
        message: "What is the project's current status?"
    }, {
        name: 'contributingGuidelines',
        type: 'input',
        message: 'What guidelines must developers know about in order to contribute to your project?'
    }, {
        name: 'creditsAuthors',
        type: 'input',
        message: 'List the creator(s) of this project.'
    },  {
        name: 'creditsAcknowledgments',
        type: 'input',
        message: 'List the acknowledgment(s) for this project.'
    }, {
        name: 'licenseYear',
        type: 'input',
        message: 'What year was your project licensed in? (Required)'
    }, {
        name: 'licenseName',
        type: 'input',
        message: 'What is your full name? (Required)'
    }, {
        name: 'license',
        type: 'list',
        message: 'Which license is your application certified under? (Required)',
        choices: [
            {value: 'Apache License 2.0'},
            {value: 'Boost Software License 1.0'},
            {value: 'GNU Affero General Public License v3.0'},
            {value: 'GNU General Public License v3.0'},
            {value: 'GNU Lesser General Public License v2.1'},
            {value: 'MIT License'},
            {value: 'Mozilla Public License 2.0'},
            {value: 'The Unlicense'},
            {value: 'No License'}
        ]
    }
    
]).then((answers) => {
    const readmeContent = generateMarkdown(answers);

    fs.writeFile('./README1.md', readmeContent, (err) => {
        if(err) {
            console.err(err);
        } else {
            console.log('Your Professional README.md has been generated!');
        }
    });
});
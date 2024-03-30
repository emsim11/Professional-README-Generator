// Generate License Badge Function
function generateLicenseBadge(license) {
    const badgeUrls = {
        'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-pink?style=flat-square&labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Fapache-2.0%2F)](https://choosealicense.com/licenses/apache-2.0/)',
        'Boost Software License 1.0': '[![License](https://img.shields.io/badge/License-BSL_1.0-pink?style=flat-square&labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Fbsl-1.0%2F)](https://choosealicense.com/licenses/bsl-1.0/)',
        'GNU Affero General Public License v3.0': '[![License](https://img.shields.io/badge/License-GNU_AGPLv3-pink?style=flat-square&labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Fagpl-3.0%2F)](https://choosealicense.com/licenses/agpl-3.0/)',
        'GNU General Public License v3.0': '[![License](https://img.shields.io/badge/License-GNU_GPLv3-pink?style=flat-square&labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Fgpl-3.0%2F)](https://choosealicense.com/licenses/gpl-3.0/)',
        'GNU Lesser General Public License v2.1': '![License](https://img.shields.io/badge/License-GNU_LGPLv3-pink?style=flat-square&labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Flgpl-3.0%2F)](https://choosealicense.com/licenses/lgpl-3.0/)',
        'MIT License': '[![License](https://img.shields.io/badge/License-MIT-pink?style=flat-square&labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Fmit%2F)](https://choosealicense.com/licenses/mit/)',
        'Mozilla Public License 2.0': '[![License](https://img.shields.io/badge/License-MPL_2.0-pink?style=flat-square&labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Fmpl-2.0%2F)](https://choosealicense.com/licenses/mpl-2.0/)',
        'The Unlicense': '[![License](https://img.shields.io/badge/License-Unlicense-pink?style=flat-square&labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Funlicense%2F)](https://choosealicense.com/licenses/unlicense/)',
        'No License': '![License](https://img.shields.io/badge/License-None-pink?style=flat-square&labelColor=3A3B3C&color=F778A1)'
    };

    return `${badgeUrls[license]}`;
}

// Generate GitHub Badge Function
function generateGitHubBadge(username, GitHub) {
    return `[![GitHub Badge](https://img.shields.io/badge/GitHub-${username}-blue?style=flat-square&logo=GitHub&labelColor=3A3B3C&color=78E1F7&link=${GitHub})](${GitHub})`;
}

// Generate Email Badge Function
function generateEmailBadge(email) {
    return `[![Email Badge](https://img.shields.io/badge/Gmail-Contact_Me-green?style=flat-square&logo=gmail&logoColor=FFFFFF&labelColor=3A3B3C&color=62F1CD)](mailto:${email})`;
}

// Generate Deployed URL Badge Function
function generateLinkBadge(titleAlt1, deployedURL) {
    return `[![Deployed URL Badge](https://img.shields.io/badge/Deployed_URL-${titleAlt1}-purple?style=flat-square&labelColor=3A3B3C&color=E0ADF7&link=${deployedURL})](${deployedURL})`;
}

// Generate Markdown File Function
function generateMarkdown(answers) {
    
    // License Badge 
    const license = answers.license;
    const licenseBadge = generateLicenseBadge(license);

    // GitHub Badge
    const username = answers.username;
    const GitHub = answers.GitHub;
    const githubBadge = generateGitHubBadge(username, GitHub);

    // Email Badge
    const email = answers.email
    const emailBadge = generateEmailBadge(email);

    // Application URL Badge
    const titleAlt1 = answers.titleAlt1;
    const deployedURL = answers.deployedURL;
    const linkBadge = generateLinkBadge(titleAlt1, deployedURL);

    // Generated Description Section
    let descriptionSection = '';
    if(answers.descriptionWhat || answers.descriptionWhy || answers.descriptionHow || answers.userStory || answers.acceptanceCriteria) {
        descriptionSection = `## Description\n\n[Back to Top](#${answers.titleAlt2})\n\n`;
        if(answers.descriptionWhat) {
            descriptionSection += `${answers.descriptionWhat}\n\n`;
        }
        if(answers.descriptionWhy) {
            descriptionSection += `${answers.descriptionWhy}\n\n`;
        }
        if(answers.descriptionHow) {
            descriptionSection += `${answers.descriptionHow}\n\n`;
        }
        if(answers.userStory) {
            descriptionSection += `### User Story\n\n${answers.userStory}\n\n`;
        }
        if(answers.acceptanceCriteria) {
            descriptionSection += `### Acceptance Criteria\n\n${answers.acceptanceCriteria}\n\n`;
        }
    }

    // Features Section
    let featuresSection = '';
    if(answers.keyFeatures) {
        featuresSection = `## Features\n\n[Back to Top](#${answers.titleAlt2})\n\n${answers.keyFeatures}\n\n`;
    }

    // Installation Section
    let installationSection = '';
    if(answers.installation) {
        installationSection = `## Installation\n\n[Back to Top](#${answers.titleAlt2})\n\n${answers.installation}\n\n`;
    }

    // Usage Section
    let usageSection = '';
    if(answers.usage || answers.visuals) {
        usageSection = `## Usage\n\n[Back to Top](#${answers.titleAlt2})\n\n`;
        if(answers.usage) {
            usageSection += `${answers.usage}\n\n`;
        }
        if(answers.visuals) {
            usageSection += `### Visuals\n\n${answers.visuals}\n\n`;
        }
    }

    // Testing Section
    let testingSection = '';
    if(answers.testing) {
        testingSection = `## Testing\n\n[Back to Top](#${answers.titleAlt2})\n\n${answers.testing}\n\n`;
    }

    // Support Section
    let supportSection = '';
    if(answers.username && answers.GitHub && answers.GitHubIssue && answers.email) {
        supportSection = `## Support\n\n[Back to Top](#${answers.titleAlt2})\n\nIf you have any questions, or additional feedback, please feel free to contact me. I will get back to you as soon as possible.\n\n*Contact Information:*\n\nGitHub: [${answers.username}](${answers.GitHub})\n\nEmail: ${answers.email}\n\n*Submit an Issue:*\n\nIf you are experiencing an issue with this application, please submit an [issue ticket](${answers.GitHubIssue}).\n\n`;
    }

    // Contributing Section
    let contributingSection = '';
    if(answers.contributing || answers.contributingRoadmap || answers.contributingProjectStatus || answers.contributingGuidelines) {
        contributingSection = `## Contributing\n\n[Back to Top](#${answers.titleAlt2})\n\n`;
        if(answers.contributing) {
            contributingSection += `${answers.contributing}\n\n`;
        }
        if(answers.contributingRoadmap) {
            contributingSection += `### Roadmap\n\n${answers.contributingRoadmap}\n\n`;
        }
        if(answers.contributingProjectStatus) {
            contributingSection += `### Project Status\n\n${answers.contributingProjectStatus}\n\n`;
        }
        if(answers.contributingGuidelines) {
            contributingSection += `### Contribution Guidelines\n\n${answers.contributingGuidelines}\n\n`;
        }
    }

    // Credits Section
    let creditsSection = '';
    if(answers.creditsAuthors || answers.creditsAcknowledgments) {
        creditsSection = `## Credits\n\nHere are listed the sources that helped make this project possible.\n\n`;
        if(answers.creditsAuthors) {
            creditsSection += `### Authors\n\n*The following developers helped create this project:*\n\n${answers.creditsAuthors}\n\n`;
        }
        if(answers.creditsAcknowledgments) {
            creditsSection += `### Acknowledgments\n\n*The following resources were used for inspiration and guidance during the development process:*\n\n${answers.creditsAcknowledgments}\n\n`;
        }
    }

    // License Section
    let licenseSection = '';
    if(answers.licenseYear && answers.licenseName && answers.license) {
        licenseSection = `## License\n\n&copy; ${answers.licenseYear} ${answers.licenseName}\n\nThis application is licensed under the [${answers.license}](./LICENSE).`
    }

    // Generated Table of Contents
    let tableOfContents = '';
    if(descriptionSection !== '') {
        tableOfContents += '[Description](#description) • ';
    }
    if(featuresSection !== '') {
        tableOfContents += '[Features](#features) • ';
    }
    if(installationSection !== '') {
        tableOfContents += '[Installation](#installation) • ';
    }
    if(usageSection !== '') {
        tableOfContents += '[Usage](#usage) • ';
    }
    if(testingSection !== '') {
        tableOfContents += '[Testing](#testing) • ';
    }
    if(supportSection !== '') {
        tableOfContents += '[Support](#support) • ';
    }
    if(contributingSection) {
        tableOfContents += '[Contributing](#contributing) • ';
    }
    if(creditsSection) {
        tableOfContents += '[Credits](#credits) • ';
    }
    if(licenseSection) {
        tableOfContents += '[License](#license) • ';
    }
    
    tableOfContents = tableOfContents.slice(0, -3);

    // README Content
    const readmeContent = `${answers.logo}\n\n# ${answers.title}\n\n***${answers.briefDescription}***\n\n${licenseBadge} ${githubBadge} ${emailBadge} ${linkBadge}\n\n${tableOfContents}\n\n${answers.projectGIF}\n\n${descriptionSection}\n\n${featuresSection}\n\n${installationSection}\n\n${usageSection}\n\n${testingSection}\n\n${supportSection}\n\n${contributingSection}\n\n${creditsSection}\n\n${licenseSection}`

    return readmeContent;

};

module.exports = generateMarkdown;
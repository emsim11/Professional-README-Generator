// Generate License Badge Function
function generateLicenseBadge(license) {
    const badgeUrls = {
        'Apache License 2.0': '[![Apache 2.0 License Badge](https://img.shields.io/badge/License-Apache_2.0-pink?labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Fapache-2.0%2F)](https://choosealicense.com/licenses/apache-2.0/)',
        'Boost Software License 1.0': '[![Boost Software License Badge](https://img.shields.io/badge/License-BSL_1.0-pink?labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Fbsl-1.0%2F)](https://choosealicense.com/licenses/bsl-1.0/)',
        'GNU Affero General Public License v3.0': '[![GNU Affero General Public 3.0 License Badge](https://img.shields.io/badge/License-GNU_AGPL_3.0-pink?labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Fagpl-3.0%2F)](https://choosealicense.com/licenses/agpl-3.0/)',
        'GNU General Public License v3.0': '[![GNU General Public 3.0 License Badge](https://img.shields.io/badge/License-GNU_GPL_3.0-pink?labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Fgpl-3.0%2F)](https://choosealicense.com/licenses/gpl-3.0/)',
        'GNU Lesser General Public License v2.1': '[![GNU Lesser General Public 2.1 License Badge](https://img.shields.io/badge/License-GNU_LGPL_3.0-pink?labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Flgpl-3.0%2F)](https://choosealicense.com/licenses/lgpl-3.0/)',
        'MIT License': '[![MIT License Badge](https://img.shields.io/badge/License-MIT-pink?labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Fmit%2F)](https://choosealicense.com/licenses/mit/)',
        'Mozilla Public License 2.0': '[![Mozilla Public 2.0 License Badge](https://img.shields.io/badge/License-MPL_2.0-pink?labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Fmpl-2.0%2F)](https://choosealicense.com/licenses/mpl-2.0/)',
        'The Unlicense': '[![The Unlicense License Badge](https://img.shields.io/badge/License-The_Unlicense-pink?labelColor=3A3B3C&color=F778A1&link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Funlicense%2F)](https://choosealicense.com/licenses/unlicense/)',
        'No License': '![No License Badge](https://img.shields.io/badge/License-None-pink?labelColor=3A3B3C&color=F778A1)'
    };

    return `${badgeUrls[license]}`;
};

// Generate GitHub Follow Badge Function
function generateGitHubFollowBadge(username, GitHub) {
    return `[![GitHub Follow Badge](https://img.shields.io/github/followers/${username}?label=Follow)](${GitHub})`;
};

// Generate GitHub Repository Forks Badge Function
function generateGitHubRepoForksBadge(username, GitHubRepo) {
    return `![GitHub Repository Forks Badge](https://img.shields.io/github/forks/${username}/${GitHubRepo}?label=Forks&labelColor=3A3B3C&logo=GitHub)`;
};

// Generate GitHub Repository Stars Badge Function
function generateGitHubRepoStarsBadge(username, GitHubRepo) {
    return `![GitHub Repository Stars Badge](https://img.shields.io/github/stars/${username}/${GitHubRepo}?label=Stars&labelColor=3A3B3C&logo=GitHub)`;
};

// Generate GitHub Repository Watchers Badge Function
function generateGitHubRepoWatchersBadge(username, GitHubRepo) {
    return `![GitHub Repository Watchers Badge](https://img.shields.io/github/watchers/${username}/${GitHubRepo}?label=Watchers&labelColor=3A3B3C&logo=GitHub)`;
};

// Generate Deployed URL Badge Function
function generateLinkBadge(titleAlt1, deployedURL) {
    return `[![Deployed URL Badge](https://img.shields.io/badge/Deployed_URL-${titleAlt1}-purple?logo=GoogleChrome&logoColor=ffffff&labelColor=3A3B3C&color=E0ADF7&link=${deployedURL})](${deployedURL})`;
};

// Generate Email Badge Function
function generateEmailBadge(email) {
    return `[![Email Badge](https://img.shields.io/badge/-Email_Me-green?logo=gmail&logoColor=FFFFFF&labelColor=3A3B3C&color=62F1CD)](mailto:${email})`;
};

// Generate GitHub Repository Contributors Badge Function
function generateGitHubRepoContributorsBadge(username, GitHubRepo) {
    return `![GitHub Repository Contributors Badge](https://img.shields.io/github/contributors/${username}/${GitHubRepo}?label=Contributors&labelColor=3A3B3C&logo=GitHub&color=78E1F7)`;
};

// Generate GitHub Profile Badge Function
function generateGitHubBadge(username, GitHub) {
    return `[![GitHub Badge](https://img.shields.io/badge/Made_By-@${username}-blue?logo=GitHub&labelColor=3A3B3C&color=78E1F7&link=${GitHub})](${GitHub})`;
};

// Generate GitHub Repository Size Badge Function
function generateGitHubRepoSizeBadge(username, GitHubRepo) {
    return `![GitHub Repository Size Badge](https://img.shields.io/github/repo-size/${username}/${GitHubRepo}?label=Repository+Size&labelColor=3A3B3C&logo=GitHub&color=78E1F7)`;
};

// Generate GitHub Repository Last Commit Badge Function
function generateGitHubRepoLastCommitBadge(username, GitHubRepo) {
    return `![GitHub Repository Last Commit Date Badge](https://img.shields.io/github/last-commit/${username}/${GitHubRepo}?label=Last+Commit&labelColor=3A3B3C&logo=GitHub&color=78E1F7)`;
};

// Generate GitHub Repository Commit Activity Badge Function
function generateGitHubRepoCommitActivityBadge(username, GitHubRepo) {
    return `![GitHub Repository Commit Activity Badge](https://img.shields.io/github/commit-activity/t/${username}/${GitHubRepo}?label=Commit+Activity&labelColor=3A3B3C&logo=GitHub&color=78E1F7)`;
}

// Generate Markdown File Function
function generateMarkdown(answers) {
    
    // License Badge 
    const license = answers.license;
    const licenseBadge = generateLicenseBadge(license);

    // GitHub Badges
    const username = answers.username;
    const GitHub = answers.GitHub;
    const GitHubRepo = answers.GitHubRepo;
    const githubFollowBadge = generateGitHubFollowBadge(username, GitHub);
    const githubRepoForksBadge = generateGitHubRepoForksBadge(username, GitHubRepo);
    const githubRepoStarsBadge = generateGitHubRepoStarsBadge(username, GitHubRepo);
    const githubRepoWatchersBadge = generateGitHubRepoWatchersBadge(username, GitHubRepo);
    const githubRepoContributorsBadge = generateGitHubRepoContributorsBadge(username, GitHubRepo);
    const githubBadge = generateGitHubBadge(username, GitHub);
    const githubRepoSizeBadge = generateGitHubRepoSizeBadge(username, GitHubRepo);
    const githubRepoLastCommitBadge = generateGitHubRepoLastCommitBadge(username, GitHubRepo);
    const githubRepoCommitActivityBadge = generateGitHubRepoCommitActivityBadge(username, GitHubRepo);
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
        descriptionSection = `## Description\n\n`;
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
        if(answers.descriptionWhat || answers.descriptionWhy || answers.descriptionHow || answers.userStory || answers.acceptanceCriteria) {
            descriptionSection += `[Back to Top](#${answers.titleAlt2})\n\n`;
        }
        
    }

    // Features Section
    let featuresSection = '';
    if(answers.keyFeatures) {
        featuresSection = `## Features\n\n${answers.keyFeatures}\n\n[Back to Top](#${answers.titleAlt2})\n\n`;
    }

    // Installation Section
    let installationSection = '';
    if(answers.installation || answers.technologies) {
        installationSection += `## Installation\n\n`;
    }
    if(answers.installation) {
        installationSection += `${answers.installation}\n\n`;
    }
    if(answers.technologies) {
        installationSection += `### Technologies\n\n${answers.technologies}\n\n`;
    }
    if(answers.installation || answers.technologies) {
        installationSection += `[Back to Top](#${answers.titleAlt2})\n\n`;
    }

    // Usage Section
    let usageSection = '';
    if(answers.usage || answers.visuals) {
        usageSection = `## Usage\n\n`;
        if(answers.usage) {
            usageSection += `${answers.usage}\n\n`;
        }
        if(answers.visuals) {
            usageSection += `### Visuals\n\n${answers.visuals}\n\n`;
        }
        if(answers.usage || answers.visuals) {
            usageSection += `[Back to Top](#${answers.titleAlt2})\n\n`;
        }
    }

    // Testing Section
    let testingSection = '';
    if(answers.testing) {
        testingSection = `## Testing\n\n${answers.testing}\n\n[Back to Top](#${answers.titleAlt2})\n\n`;
    }

    // Support Section
    let supportSection = '';
    if(answers.username && answers.GitHub && answers.GitHubIssue && answers.email) {
        supportSection = `## Support\n\n${emailBadge}\n\n*Contact Information:*\n\nIf you have any questions, or additional feedback, please feel free to contact me. I will get back to you as soon as possible.\n\n*Submit an Issue:*\n\nIf you are experiencing an issue with this application, please submit an [issue ticket](${answers.GitHubIssue}).\n\n[Back to Top](#${answers.titleAlt2})\n\n`;
    }

    // Contributing Section
    let contributingSection = '';
    if(answers.contributing || answers.contributingRoadmap || answers.contributingProjectStatus || answers.contributingGuidelines) {
        contributingSection = `## Contributing\n\n`;
        if(answers.username && answers.GitHubRepo) {
            contributingSection += `${githubRepoContributorsBadge}\n\n`;
        }
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
        if(answers.contributing || answers.contributingRoadmap || answers.contributingProjectStatus || answers.contributingGuidelines) {
            contributingSection += `[Back to Top](#${answers.titleAlt2})\n\n`;
        }
    }

    // Credits Section
    let creditsSection = '';
    if(answers.creditsAuthors || answers.creditsAcknowledgments) {
        creditsSection = `## Credits\n\n`;
        if(answers.username && answers.GitHub) {
            creditsSection += `${githubBadge}\n\nHere are listed the sources that helped make this project possible.\n\n`;
        } else {
            creditsSection += `Here are listed the sources that helped make this project possible.\n\n`;
        }
        if(answers.creditsAuthors) {
            creditsSection += `### Authors\n\n*The following developers helped create this project:*\n\n${answers.creditsAuthors}\n\n`;
        }
        if(answers.creditsAcknowledgments) {
            creditsSection += `### Acknowledgments\n\n*The following resources were used for inspiration and guidance during the development process:*\n\n${answers.creditsAcknowledgments}\n\n`;
        }
        if(answers.username && answers.GitHub) {
            creditsSection += `### Repository Information\n\n${githubRepoSizeBadge} ${githubRepoLastCommitBadge} ${githubRepoCommitActivityBadge}\n\n`;
        }
        if(answers.creditsAuthors || answers.creditsAcknowledgments) {
            creditsSection += `[Back to Top](#${answers.titleAlt2})\n\n`;
        }
    }

    // License Section
    let licenseSection = '';
    if(answers.licenseYear && answers.licenseName && answers.license) {
        licenseSection = `## License\n\n${licenseBadge}\n\n&copy; ${answers.licenseYear} ${answers.licenseName}\n\nThis application is licensed under the [${answers.license}](./LICENSE).\n\n[Back to Top](#${answers.titleAlt2})`;
    }

    // Generated Table of Contents
    let tableOfContents = '';
    if(descriptionSection !== '') {
        tableOfContents += '<a href="#description">Description</a> • \n';
    }
    if(featuresSection !== '') {
        tableOfContents += '<a href="#features">Features</a> • \n';
    }
    if(installationSection !== '') {
        tableOfContents += '<a href="#installation">Installation</a> • \n';
    }
    if(usageSection !== '') {
        tableOfContents += '<a href="#usage">Usage</a> • \n';
    }
    if(testingSection !== '') {
        tableOfContents += '<a href="#testing">Testing</a> • \n';
    }
    if(supportSection !== '') {
        tableOfContents += '<a href="#support">Support</a> • \n';
    }
    if(contributingSection) {
        tableOfContents += '<a href="#contributing">Contributing</a> • \n';
    }
    if(creditsSection) {
        tableOfContents += '<a href="#credits">Credits</a> • \n';
    }
    if(licenseSection) {
        tableOfContents += '<a href="#license">License</a> • \n';
    }
    
    tableOfContents = tableOfContents.slice(0, -3);

    // README Content
    const readmeContent = `<div align="center">\n\n<a href="${answers.logo}"><img src="${answers.logo}" alt="Application Logo" width="250"></a>\n\n# ${answers.title}\n\n<h3>${answers.briefDescription}</h3>\n\n${githubFollowBadge} ${githubRepoForksBadge} ${githubRepoStarsBadge} ${githubRepoWatchersBadge}\n\n${linkBadge}\n\n<p>\n${tableOfContents}</p>\n\n</div>\n\n${answers.projectGIF}\n\n${descriptionSection}${featuresSection}${installationSection}${usageSection}${testingSection}${supportSection}${contributingSection}${creditsSection}${licenseSection}`

    return readmeContent;

};

module.exports = generateMarkdown;
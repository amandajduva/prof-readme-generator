// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/License-${license}-ff69b4)`
  } else {
    return "";
  };
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `*[License](#license)`;
  } else {
    return "";
  };
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This project is licensed under the ${license} license.`;
  } else {
    return "";
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  *[Installation](#installation)
  *[Usage](#usage)
  ${renderLicenseLink(data.license)}
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation

  To install the necessary dependencies for this project, please run the command: ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing 

  ${data.contributing}

  ## Tests
  
  To run tests for this project, please run the following command: ${data.test}

  ## Questions

  If there are any questions about this repository, you can contact me at:
  ${data.email} or you can view my profile at github.com/${data.github}.
`;
}

module.exports = generateMarkdown;

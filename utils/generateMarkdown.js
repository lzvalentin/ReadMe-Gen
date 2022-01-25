const licArray = ["Apache 2.0", "GNU 3.0 (GPL)", "GNU Library (LGPL)", "MIT License", "Mozilla Public License 2.0", "Common Development and Distrubtion License", "Eclipse Public License version 2.0"]
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licArray[0]){
    return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache2.0-green.svg)"

} else if (license===licArray[1]){
  return "![License: GNU 3.0](https://img.shields.io/badge/License-GNU3.0-green.svg)"

} else if (license===licArray[2]){
  return "![License: GNU Library](https://img.shields.io/badge/License-GNU-Library-(LGPL)-green.svg))"

}else if (license===licArray[3]){
  return "![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)"

}else if (license===licArray[4]){
  return "![License: Mozilla](https://img.shields.io/badge/License-Mozilla Public License 2.0-green.svg)"

}else if (license==licArray[5]) {
  return "![License: Common Dev](https://img.shields.io/badge/License-Common Development & Distrubtion-green.svg)"
}
else if (license===licArray[6]){
  return "![License: Eclipse Public License 2.0](https://img.shields.io/badge/License-Eclipse Public License 2.0-green.svg)"
}else {
  return ""
}
}
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license===licArray[0]){
  return `[${licArray[0]}](https://opensource.org/licenses/Apache-2.0)`
}
else if (license===licArray[1]){
  return `[${licArray[1]}](https://opensource.org/licenses/GPL-3.0)`

}else if (license===licArray[2]){
  return `[${licArray[2]}](https://opensource.org/licenses/LGPL-3.0)`
}
else if (license===licArray[3]){
  return `[${licArray[3]}(https://opensource.org/licenses/MIT)`

}
else if (license===licArray[4]){
  return `[${licArray[4]}](https://opensource.org/licenses/MPL-2.0)`

}
else if (license===licArray[5]){
  return `[${licArray[5]}](https://opensource.org/licenses/CDDL-1.0)`
}
else if (license===licArray[6]){
  return `[${licArray[6]}](https://opensource.org/licenses/EPL-2.0)`
}
else {
  return ""
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===licArray[0]){
    return `Click here: ${licArray[0]}`

  }else if (license===licArray[1]){
    return `Click here: ${licArray[1]}`

  }else if (license===licArray[2]){
    return `Click here: ${licArray[2]}`

  }else if (license===licArray[3]){
    return `Click here: ${licArray[3]}`

  }else if (license===licArray[4]){
    return `Click here: ${licArray[4]}`

  }else if (license===licArray[5]){
    return `Click here: ${licArray[5]}`

  }else if (license===licArray[6]){
    return `Click here: ${licArray[6]}`
  }
  else{
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Badges 
${renderLicenseBadge(data.license)}

## Description

  ${data.description}

## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Credits](#Credits)
  * [Tests](#Tests)
  * [Questions](#Questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License


${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Credits

${data.credits}

## Tests

${data.tests}

## Questions

### Any questions, you can contact me here:
[${data.username}](http://github.com/${data.username})
${data.email}

`;



}

module.exports = generateMarkdown;

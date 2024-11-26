const {stdout} = require('node:process');

function displayMessage(param) {
    process.stdout.write(param + '\n');
}

module.exports = displayMessage;

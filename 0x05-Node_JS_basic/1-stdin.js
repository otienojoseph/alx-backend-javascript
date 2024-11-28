const readline = require('readline');

/**
 * Program takes input from command line and prints it to stdout
 * @returns: Prints to stdout the parameter
 */
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Welcome to Holberton School, what is your name?");

r1.on('line', line => {
    console.log(`Your name is: ${line}`);
    r1.close();
});

r1.on('close', () => {
    console.log("This important software is closing");
    process.exit(0);
});

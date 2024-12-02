/**
 * Program takes name input from STDIN and displays a message containing
 * the name INPUT to STDOUT
 *
 * When the user ends the program, a closing message is displayed
 *
 * @returns: Prints to stdout "Your name is: INPUT"
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

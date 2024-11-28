const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Welcome to Holberton School, what is your name?\n');
rl.prompt();

rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
});

rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});

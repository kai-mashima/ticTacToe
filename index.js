var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var one = ' ';
var two = ' ';
var three = ' ';
var four = ' ';
var five = ' ';
var six = ' ';
var seven = ' ';
var eight = ' ';
var nine = ' ';

var gameboard = ` ${one} | ${two} | ${three} \n --------- \n ${four} | ${five} | ${six} \n --------- \n ${seven} | ${eight} | ${nine} \n`;

var positionKey = `'one'  |'two'  |'three'\n ------------------ \n'four' |'five' |'six'\n ------------------ \n'seven'|'eight'|'nine'\n`;

rl.question('Would you like to play Tic Tac Toe? (Y or N) ', (ans) => {
  if (ans === 'Y') {
    console.log(gameboard);
    console.log('Board Locations: \n', positionKey);
  };

  rl.close();
});

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var playerOne = {
  name: 'Player 1',
  piece: 'X',
  positions: [],
};

var playerTwo = {
  name: 'Player 2',
  piece: '0',
  positions: [],
};

var p = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

var currentPlayer = {
  one: true,
};

var togglePlayer = () => {
  currentPlayer.one = !currentPlayer.one;
};

var gameboard = ` ${p[0][0]} | ${p[0][1]} | ${p[0][2]} \n --------- \n ${p[1][0]} | ${p[1][1]} | ${p[1][2]} \n --------- \n ${p[2][2]} | ${p[2][2]} | ${p[2][2]} \n`;

var positionKey = `'one'  |'two'  |'three'\n ------------------ \n'four' |'five' |'six'\n ------------------ \n'seven'|'eight'|'nine'\n`;

var checkForWin = () => {
  var oneWin = false;
  var twoWin = false;
  //row wins 
  p.forEach(row => {
    oneWin = row.every(cell => {
      return cell === 'X';
    });
    twoWin = row.every(cell => {
      return cell === '0';
    });
  });
  //column wins

  //diagonal wins
};

checkForWin();

rl.question('Would you like to play Tic Tac Toe? (Y or N) ', (ans) => {
  if (ans === 'Y') {
    console.log(gameboard);
    console.log('Board Locations: \n', positionKey);
  };
  rl.close();
});


rl.question(`Where would you like to play? (type the string of the locations provided below): ${positionKey}`, (ans) => {
  console.log(ans);
  rl.close();
});
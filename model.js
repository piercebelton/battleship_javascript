
var gameBoard = []; //back-end array to hold values that are represented in View's table

var torpedoes = 0; //the # of torpedoes that the user has

function buildTable() { //builds back-end array to hold values that are represented in View's table
  for (var i = 0; i < 10; i++) {
    gameBoard.push([0,0,0,0,0,0,0,0,0,0]);
  }
  console.log(gameBoard);
}

function countTorpedoes() { //modifies the # of torpedoes the user has
  torpedoes++;
}

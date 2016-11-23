
var board = []; //back-end array to hold values that are represented in View's table
var ship = 1; //Sets a ship variable to 1
var shipsRemaining = 5;

var torpedoes = 25; //the # of torpedoes that the user has

function buildTable() { //builds back-end array to hold values that are represented in View's table
  for (var i = 0; i < 10; i++) {
    board.push([0,0,0,0,0,0,0,0,0,0]);
  }
  console.log(board);
}

function countTorpedoes() { //modifies the # of torpedoes the user has
  torpedoes--;
}

function setShips() {
  for (var i = 0; i <= 4; i++) {
    var row = Math.floor(Math.random()*10);
    var column = Math.floor(Math.random()*10);
    board[row][column] = ship;
    console.log("row: " + row + " column: " + column);
  }
}

function remainingShips() {
    shipsRemaining--;
}

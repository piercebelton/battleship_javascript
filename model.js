
var gameBoard = []; //back-end array to hold values that are represented in View's table

function buildTable() { //builds back-end array to hold values that are represented in View's table
  for (var i = 0; i < 10; i++) {
    gameBoard.push([0,0,0,0,0,0,0,0,0,0]);
  }
  console.log(gameBoard);
}


var board = []; //back-end array to hold values that are represented in View's table
var ship = 1; //Sets a ship variable to 1
var shipsRemaining = 5;

var torpedoes = 5; //the # of torpedoes that the user has

function buildTable() { //builds back-end array to hold values that are represented in View's table
  for (var i = 0; i < 10; i++) {
    board.push([0,0,0,0,0,0,0,0,0,0]);
  }
}

function countTorpedoes() { //modifies the # of torpedoes the user has
  torpedoes--;
}

function setShips() {
  var i = 0;
  while (i <= 4) {
    var row = Math.floor(Math.random()*10);
    var column = Math.floor(Math.random()*10);


//check for if row and column are both between 1 and 8
    if (row > 0 && row < 9 && column > 0 && column < 9){
      if (board[row][column] === 1 || board[row+1][column] === 1 || board[row-1][column] === 1 || board[row][column+1] === 1 || board[row][column-1] === 1 || board[row+1][column+1] === 1 || board[row+1][column-1] === 1 || board[row-1][column-1] === 1 || board[row-1][column+1] === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        board[row][column] = ship;
        console.log("row: " + row + " column: " + column);
        i++
      }
    }

//check for if row is between 1 and 8 and column is 0 (remove column-1)
    else if (row > 0 && row < 9 && column < 9){
      if (board[row][column] === 1 || board[row+1][column] === 1 || board[row-1][column] === 1 || board[row][column+1] === 1 || board[row+1][column+1] === 1 || board[row-1][column+1] === 1) {
      // if the value of board equals 1, then do not place the ship and reroll random values.
      console.log("duplicate: " + row + " " + column);
    } else {
      board[row][column] = ship;
      console.log("row: " + row + " column: " + column);
      i++
    }
  }

//check for if row is between 1 and 8 and column is 9 (remove column+1)
    else if (row > 0 && row < 9 && column > 0){
      if (board[row][column] === 1 || board[row+1][column] === 1 || board[row-1][column] === 1 || board[row][column-1] === 1 || board[row+1][column-1] === 1 || board[row-1][column-1] === 1) {
      // if the value of board equals 1, then do not place the ship and reroll random values.
      console.log("duplicate: " + row + " " + column);
    } else {
      board[row][column] = ship;
      console.log("row: " + row + " column: " + column);
      i++
    }
  }

//check for if row is 0 and column is between 1 and 8 (remove row-1)
    else if (row < 9 && column > 0 && column < 9){
      if (board[row][column] === 1 || board[row][column-1] === 1 || board[row][column+1] === 1 || board[row+1][column-1] === 1 || board[row+1][column] === 1 || board[row+1][column+1] === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        board[row][column] = ship;
        console.log("row: " + row + " column: " + column);
        i++
      }
    }

//check for if row is 9 and column is between 1 and 8 (remove row+1)
    else if (row > 0 && column > 0 && column < 9){
      if (board[row][column] === 1 || board[row][column-1] === 1 || board[row][column+1] === 1 || board[row-1][column-1] === 1 || board[row-1][column] === 1 || board[row-1][column+1] === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        board[row][column] = ship;
        console.log("row: " + row + " column: " + column);
        i++
      }
    }
//check for corners
    else if(row === 0 && column === 0) { // top left corner
      if (board[row][column] === 1 || board[row][column+1] === 1 || board[row+1][column+1] === 1 || board[row+1][column] === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        board[row][column] = ship;
        console.log("row: " + row + " column: " + column);
        i++
      }
    }
    else if(row === 0 && column === 9) { //top right corner
      if (board[row][column] === 1 || board[row][column-1] === 1 || board[row+1][column-1] === 1 || board[row+1][column] === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        board[row][column] = ship;
        console.log("row: " + row + " column: " + column);
        i++
      }
    }
    else if(row === 9 && column === 0) { //bottom left corner
      if (board[row][column] === 1 || board[row][column+1] === 1 || board[row-1][column+1] === 1 || board[row-1][column] === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        board[row][column] = ship;
        console.log("row: " + row + " column: " + column);
        i++
      }
    }
    else if(row === 9 && column === 9) { //bottom right corner
      if (board[row][column] === 1 || board[row][column-1] === 1 || board[row-1][column-1] === 1 || board[row-1][column] === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        board[row][column] = ship;
        console.log("row: " + row + " column: " + column);
        i++
      }
    }
  } // end of while loop
} // end of function

function remainingShips() {
    shipsRemaining--;
}

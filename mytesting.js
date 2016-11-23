

function setShips() {
  var i = 0;
  while (i <= 4) {
    var row = Math.floor(Math.random()*10);
    var column = Math.floor(Math.random()*10);

    var sameSquare = board[row][column];
    var squareAbove = board[row+1][column];
    var sqaureBelow = board[row-1][column];
    var squareRight = board[row][column+1];
    var squareLeft = board[row][column-1];
    var rightDownDiagonal = board[row+1][column+1];
    var leftDownDiagonal = board[row+1][column-1];
    var leftUpDiagonal = board[row-1][column-1];
    var rightUpDiagonal = board[row-1][column+1];

//check for if row and column are both between 1 and 8
    if (row > 0 && row < 9 && column > 0 && column < 9){
      if (sameSquare === 1 || squareAbove === 1 || sqaureBelow === 1 || squareRight === 1 || squareLeft === 1 || rightDownDiagonal === 1 || leftDownDiagonal === 1 || leftUpDiagonal === 1 || rightUpDiagonal === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        sameSquare = ship;
        console.log("row: " + row + " column: " + column);
        i++
      }
    }

//check for if row is between 1 and 8 and column is 0 (remove column-1)
    else if (row > 0 && row < 9 && column < 9){
      if (sameSquare === 1 || squareAbove === 1 || sqaureBelow === 1 || squareRight === 1 || rightDownDiagonal === 1 || rightUpDiagonal === 1) {
      // if the value of board equals 1, then do not place the ship and reroll random values.
      console.log("duplicate: " + row + " " + column);
    } else {
      sameSquare = ship;
      console.log("row: " + row + " column: " + column);
      i++
    }
  }

//check for if row is between 1 and 8 and column is 9 (remove column+1)
    else if (row > 0 && row < 9 && column > 0){
      if (sameSquare === 1 || squareAbove === 1 || sqaureBelow === 1 || squareLeft === 1 || leftDownDiagonal === 1 || leftUpDiagonal === 1) {
      // if the value of board equals 1, then do not place the ship and reroll random values.
      console.log("duplicate: " + row + " " + column);
    } else {
      sameSquare = ship;
      console.log("row: " + row + " column: " + column);
      i++
    }
  }

//check for if row is 0 and column is between 1 and 8 (remove row-1)
    else if (row < 9 && column > 0 && column < 9){
      if (sameSquare === 1 || squareLeft === 1 || squareRight === 1 || leftDownDiagonal === 1 || squareAbove === 1 || rightDownDiagonal === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        sameSquare = ship;
        console.log("row: " + row + " column: " + column);
        i++
      }
    }

//check for if row is 9 and column is between 1 and 8 (remove row+1)
    else if (row > 0 && column > 0 && column < 9){
      if (sameSquare === 1 || squareLeft === 1 || squareRight === 1 || leftUpDiagonal === 1 || sqaureBelow === 1 || rightUpDiagonal === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        sameSquare = ship;
        console.log("row: " + row + " column: " + column);
        i++
      }
    }
//check for corners
    else if(row === 0 && column === 0) { // top left corner
      if (sameSquare === 1 || squareRight === 1 || rightDownDiagonal === 1 || squareAbove === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        sameSquare = ship;
        console.log("row: " + row + " column: " + column);
        i++
      }
    }
    else if(row === 0 && column === 9) { //top right corner
      if (sameSquare === 1 || squareLeft === 1 || leftDownDiagonal === 1 || squareAbove === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        sameSquare = ship;
        console.log("row: " + row + " column: " + column);
        i++
      }
    }
    else if(row === 9 && column === 0) { //bottom left corner
      if (sameSquare === 1 || squareRight === 1 || rightUpDiagonal === 1 || sqaureBelow === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        sameSquare = ship;
        console.log("row: " + row + " column: " + column);
        i++
      }
    }
    else if(row === 9 && column === 9) { //bottom right corner
      if (sameSquare === 1 || squareLeft === 1 || leftUpDiagonal === 1 || sqaureBelow === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        sameSquare = ship;
        console.log("row: " + row + " column: " + column);
        i++
      }
    }
  } // end of while loop
} // end of function

function remainingShips() {
    shipsRemaining--;
}

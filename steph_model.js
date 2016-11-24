
var board = []; //back-end array to hold values that are represented in View's table
var ship = 1; //Sets a ship variable to 1
var shipsRemaining = 3;

var torpedoes = 5; //the # of torpedoes that the user has

function buildTable() { //builds back-end array to hold values that are represented in View's table
  for (var i = 0; i < 10; i++) {
    board.push([0,0,0,0,0,0,0,0,0,0]);
  }
}

function countTorpedoes() { //modifies the # of torpedoes the user has
  torpedoes--;
}

function setSingleShips() {
  var singleShip = 0;
  var row = Math.floor(Math.random()*10);
  var column = Math.floor(Math.random()*10);

  console.log("SS RowCol Start: " + row + " " + column);

  while (singleShip < 3) {
    while (checkEmptyCells(row, column, 1, 0) === true) {
      row = Math.floor(Math.random()*10);
      column = Math.floor(Math.random()*10);
      console.log("SS RowCol: " + row + " " +column);
    }
    board[row][column] = ship; //set array position row column to 1
    console.log("SS SET RowCol: " + row + " " + column);
    singleShip++;
    console.log("SS Count:" + singleShip);
    console.log(" ");
    }
  }

function checkEmptyCells(row, column, length, direction) {
  array = [];

  for (var i = 0; i <= length; i++) {//this will move the checker along the ships length
    if (row >= 9) {
      console.log("R " + row);
      row = 9;
      //this pushes the value at array position row, column
      array.push(0,board[row][column],board[row-1][column-1],board[row-1][column+1],board[row-1][column],board[row][column+1],board[row][column-1]);
      console.log("Check array row>9:");
      console.log(array);

      if (direction === 0 && length > 1){ //if its vertical then add to the row each loop
        row += 1;
        console.log("Row++: " + row);
      } else if (direction === 1 && length > 1){ //if horizontal then add to the column each loop
        column += 1;
        console.log("Col++: " + column);
      } else {
        return array.some(function(item){ //runs a blind function on array
          return item === 1;
      });
    }
      // board[row+1][column-1], //removed row+1
      // ,board[row+1][column+1]
      // board[row+1][column],


    } else if (row <= 0) {
      console.log("R " + row);
      row = 0;
      array.push(0,board[row][column],board[row+1][column+1],board[row+1][column-1],board[row+1][column],board[row][column+1],board[row][column-1]);
      console.log("Check array row<0:");
      console.log(array);

      if (direction === 0 && length > 1){ //if its vertical then add to the row each loop
        row += 1;
        console.log("Row++: " + row);
      } else if (direction === 1 && length > 1){ //if horizontal then add to the column each loop
        column += 1;
        console.log("Col++: " + column);
      } else {
        return array.some(function(item){ //runs a blind function on array
          return item === 1;
      });
    }
      // board[row-1][column-1], //removed col+1
      // board[row-1][column+1],
      // board[row-1][column],

    } else {
      array.push(0,board[row][column],board[row-1][column-1],board[row-1][column+1],board[row+1][column+1],board[row+1][column-1],board[row-1][column],board[row+1][column],board[row][column+1],board[row][column-1]);
      console.log("Check array:");
      console.log(array);

      if (direction === 0 && length > 1){ //if its vertical then add to the row each loop
        row += 1;
        console.log("Row++: " + row);
      } else if (direction === 1 && length > 1){ //if horizontal then add to the column each loop
        column += 1;
        console.log("Col++: " + column);
      } else {
        return array.some(function(item){ //runs a blind function on array
          return item === 1;
        });
      }
    }
  console.log("Full loop:" + i);
}//end loop
  return array.some(function(item){ //runs a blind function on array
    return item === 1;  //if any items in array are equal to 1 then return true
  });
}//end function

        ///ALL CHECKS CAN CHECK NO MATTER WHAT UNTIL YOU PLACE A SHIP
        // board[row][column] // same cell
        // board[row-1][column-1] // cell upper left diagonal
        // board[row-1][column+1] // cell upper right diagonal
        // board[row+1][column+1] // cell lower left diagonal
        // board[row+1][column-1] // cell lower right diagonal
        // board[row-1][column] // cell above
        // board[row+1][column] // cell below
        // board[row][column+1] // cell to right
        // board[row][column-1] // cell to left

function remainingShips() {
    shipsRemaining--; //Decrements the ships remaining
}

function setFiveBlockShip() {
  var fiveBlock = 0;

  while (fiveBlock < 1) {
    var row = Math.floor(Math.random()*10);
    var column = Math.floor(Math.random()*10);
    var direction = Math.floor(Math.random()*2); //random number to assign whether the ship is vertical(0) or horizontal (1)
    console.log("5Ship Direction: " + direction);
    console.log("5Ship RowCol START: " + row + " " + column);
    if (direction === 0) { //if random number is 0, make vertical ship
      while ((row + 4 > 9) || (checkEmptyCells(row, column, 5, direction) === true)) { //if column + 4 is greater than 9 the ship will go off the board, so generate a new random number instead
        row = Math.floor(Math.random()*10);
        column = Math.floor(Math.random()*10);
        console.log("5Ship RowCol Loop 0: " + row + " " + column);
      }
      //If the ship will fit, then set a 1 in each square in the vertical column
      console.log("5Ship SET RowCol 0: " + row + " " + column);
      for (var i = 0; i  < 5; i++) {
        board[row + i][column] = ship;
        console.log("5Ship Build: " + (row + i) + " " + column);
      }
      // board[row][column] = ship;
      // board[row+1][column] = ship;
      // board[row+2][column] = ship;
      // board[row+3][column] = ship;
      // board[row+4][column] = ship;
      fiveBlock++;
      console.log("5Ship count: " + fiveBlock);
    } else {
      while ((column + 4 > 9) || (checkEmptyCells(row,column,5,direction) === true)) { //if the 5 block ship goes off the board then generate a new random number
        row = Math.floor(Math.random()*10);
        column = Math.floor(Math.random()*10);
        console.log("5Ship RowCol Loop 1: " + row + " " + column);
      }
      console.log("5Ship SET RowCol 1: " + row + " " + column);
      for (var i = 0; i  < 5; i++) {
        board[row][column + i] = ship;
        console.log("5Ship Build: " + row + " " + (column + i));
      }
      // board[row][column] = ship;
      // board[row][column+1] = ship;
      // board[row][column+2] = ship;
      // board[row][column+3] = ship;
      // board[row][column+4] = ship;
      fiveBlock++;
      console.log("5Ship count: " + fiveBlock);
    } //Ends else
  } //Ends while loop
}//Ends Set 5block


function setFourBlockShip() {
  var fourShip = 0;

  while (fourShip < 2) { //This loop runs until there are 3 single ships
    var row = Math.floor(Math.random()*10);
    var column = Math.floor(Math.random()*10);
    var direction = Math.floor(Math.random()*2); //random number to assign whether the ship is vertical(0) or horizontal (1)
    console.log("4Ship Direction: " + direction);
    console.log("4Ship RowCol START: " + row + " " + column);
    if (direction === 0) { //if random number is 0, make vertical ship
      while ((row + 3 > 9) || (checkEmptyCells(row, column, 4, direction) === true)) { //if column + 4 is greater than 9 the ship will go off the board, so generate a new random number instead
        row = Math.floor(Math.random()*10);
        column = Math.floor(Math.random()*10);
        console.log("4B RowCol Loop 0: " + row + " " + column);
      }
      console.log("4B SET RowCol 0: " + row + " " + column);
      //If the ship will fit, then set a 5 in each square in the vertical column
      for (var i = 0; i  < 4; i++) {
        board[row + i][column] = ship;
        console.log("4Ship Build: " + (row + i) + " " + column);
      }
      // board[row][column] = ship;
      // board[row+1][column] = ship;
      // board[row+2][column] = ship;
      // board[row+3][column] = ship;
      fourShip++;
      console.log("4Ship Count: " + fourShip);
    } else {
      while ((column + 3 > 9) || (checkEmptyCells(row, column, 4, direction) === true)) { //if column + 4 is greater than 9 the ship will go off the board, so generate a new random number instead
        row = Math.floor(Math.random()*10);
        column = Math.floor(Math.random()*10);
        console.log("4B RowCol Loop 1: " + row + " " + column);
      }
      console.log("4B SET RowCol 1: " + row + " " + column);
      for (var i = 0; i  < 5; i++) {
        board[row][column + i] = ship;
        console.log("4Ship Build: " + row + " " + (column + i));
      }
      // board[row][column] = ship;
      // board[row][column+1] = ship;
      // board[row][column+2] = ship;
      // board[row][column+3] = ship;
      fourShip++;
      console.log("4Ship Count: " + fourShip);
    }
  }
}

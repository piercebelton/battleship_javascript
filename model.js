
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
  while (singleShip < 3) { //This loop runs until there are 3 single ships
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
        singleShip++ //increments the number of ships after 1 is set
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
      singleShip++
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
      singleShip++
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
        singleShip++
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
        singleShip++
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
        singleShip++
      }
    }
    else if(row === 0 && column === 9) { //top right corner
      if (board[row][column] === 1 || board[row][column-1] === 1 || board[row+1][column-1] === 1 || board[row+1][column] === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        board[row][column] = ship;
        console.log("row: " + row + " column: " + column);
        singleShip++
      }
    }
    else if(row === 9 && column === 0) { //bottom left corner
      if (board[row][column] === 1 || board[row][column+1] === 1 || board[row-1][column+1] === 1 || board[row-1][column] === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        board[row][column] = ship;
        console.log("row: " + row + " column: " + column);
        singleShip++
      }
    }
    else if(row === 9 && column === 9) { //bottom right corner
      if (board[row][column] === 1 || board[row][column-1] === 1 || board[row-1][column-1] === 1 || board[row-1][column] === 1) {
        // if the value of board equals 1, then do not place the ship and reroll random values.
        console.log("duplicate: " + row + " " + column);
      } else {
        board[row][column] = ship;
        console.log("row: " + row + " column: " + column);
        singleShip++
      }
    }
  } // end of while loop
} // end of function

function remainingShips() {
    shipsRemaining--; //Decrements the ships remaining
}

function setFiveBlockShip() {
  var row = Math.floor(Math.random()*10);
  var column = Math.floor(Math.random()*10);
  var verticalOrHorizontal = Math.floor(Math.random()*2); //random number to assign whether the ship is vertical(0) or horizontal (1)
  console.log("Vertical or Horizontal: " + verticalOrHorizontal);
  console.log("FiveBlock: "+ row + " " + column);

  if (verticalOrHorizontal === 0) { //if random number is 0, make vertical ship
    while (column + 4 > 9) {//if column + 4 is greater than 9 the ship will go off the board, so generate a new random number instead
      column = Math.floor(Math.random()*10); //generate new number until it satisfies the while loop
    }
    //If the ship will fit, then set a 1 in each square in the vertical column
    board[row][column] = ship;
    board[row][column+1] = ship;
    board[row][column+2] = ship;
    board[row][column+3] = ship;
    board[row][column+4] = ship;
  }

  if (verticalOrHorizontal === 1) {
    while (row + 4 > 9 ) {//if the 5 block ship goes off the board then generate a new random number
      row = Math.floor(Math.random()*10);
    }
    board[row][column] = ship;
    board[row+1][column] = ship;
    board[row+2][column] = ship;
    board[row+3][column] = ship;
    board[row+4][column] = ship;
  }
}

//This needs to have a cheker for where it set ships
function setFourBlockShip() {
  var fourShip = 0;
  while (fourShip < 2) { //This loop runs until there are 3 single ships
    var row = Math.floor(Math.random()*10);
    var column = Math.floor(Math.random()*10);

    var verticalOrHorizontal = Math.floor(Math.random()*2); //random number to assign whether the ship is vertical(0) or horizontal (1)
    console.log("Vertical or Horizontal: " + verticalOrHorizontal);
    console.log("FourBlock: "+ row + " " + column);

    if (verticalOrHorizontal === 0) { //if random number is 1, make vertical ship
      while (column + 3 > 9) {//if column + 4 is greater than 9 the ship will go off the board, so generate a new random number instead
        column = Math.floor(Math.random()*10); //generate new number
      }
      //If the ship will fit, then set a 5 in each square in the vertical column
      board[row][column] = ship;
      board[row][column+1] = ship;
      board[row][column+2] = ship;
      board[row][column+3] = ship;
      fourShip++;
    }

    if (verticalOrHorizontal === 1) {
      while (row + 3 > 9 ) {//if the 5 block ship goes off the board then generate a new random number
        row = Math.floor(Math.random()*10);
      }
      board[row][column] = ship;
      board[row+1][column] = ship;
      board[row+2][column] = ship;
      board[row+3][column] = ship;
      fourShip++;
    }
  }
}

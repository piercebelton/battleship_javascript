
var board = []; //back-end array to hold values that are represented in View's table
var arrayOfShips = []; //sets up empty array to track all ships created
var torpedoes = 30; //the # of torpedoes that the user has

function buildTable() { //builds back-end array to hold ship values represented by the gameboard
  for (var i = 0; i < 10; i++) { //loops 10 times
    board.push([0,0,0,0,0,0,0,0,0,0]); //pushes an array of 10 zeroes to the board array
  }
}

function countTorpedoes() {
  torpedoes--; //decrements the count of torpedoes by 1
}

function newGame() {
  board = [];
  arrayOfShips = [];
  torpedoes = 30;
  buildTable();
  console.clear();
}

function shipDirection(direction) { //Changes 0/1 to "vertical" or "horizontal"; for readability of console.log
  if (direction === 0) {
    return "Vertical";
  } else {
    return "Horizontal";
  }
}


function setXBlockShips(length, shipsNeeded) {
  var shipCount = 0;
  console.log("Setting: " + shipsNeeded + " Ship Length: " + length);


  while (shipCount < shipsNeeded) { //while loop runs while shipcount is less than needed
    console.log("------- BEGIN SET " + length + "SHIP -------");

    var blockShipArray = []; //creates empty array to hold coordinates of each ship

    var row = Math.floor(Math.random()*10); //random row generated 0-9
    var column = Math.floor(Math.random()*10); //random column generated 0-9
    var direction = Math.floor(Math.random()*2); //random direction vertical(0) or horizontal(1)

    console.log(length + "Ship Direction: " + shipDirection(direction));
    // console.log(length + "Ship START: " + row + " " + column);

    if (direction === 0) { //vertical ship
      while ((row + (length - 1) > 9) || (checkEmptyCells(row, column, length, direction) === true)) {
        //while loops run if the row+length is greater than the board OR there are values in touching cells
        row = Math.floor(Math.random()*10); //regenerates row
        column = Math.floor(Math.random()*10); //regenerates column
        // console.log(length + "Ship Loop Vertical: " + row + " " + column);
      }
      // console.log(length + "Ship SET Vertical: " + row + " " + column);
      for (var i = 0; i  < length; i++) { //loop to build ship after while loop finds acceptable coordinates
        board[row + i][column] = length; //sets a value of length in the backend array position
        blockShipArray.push((row + i) + "" + column); //pushes coordinates to empty array to track all ships
        console.log(length + "Ship Build Vertical: " + (row + i) + " " + column);
        // console.log(JSON.stringify(blockShipArray));
      }
      shipCount++; //increments ship count after each build

      console.log(length + "Ship count: " + shipCount);
      console.log("-------- END SET " + length + "SHIP --------");
      console.log(" ");
    } else { //horizontal ship
      while ((column + (length - 1) > 9) || (checkEmptyCells(row,column,length,direction) === true)) { //if the 5 block ship goes off the board then generate a new random number
        row = Math.floor(Math.random()*10);
        column = Math.floor(Math.random()*10);
        // console.log(length + "Ship Loop Horizontal: " + row + " " + column);
      }
      // console.log(length + "Ship SET Horizontal: " + row + " " + column);
      for (var i = 0; i  < length; i++) {
        board[row][column + i] = length;
        blockShipArray.push((row + "" + (column + i)));
        console.log(length + "Ship Build Horizontal: " + row + " " + (column + i));
        // console.log(JSON.stringify(blockShipArray));
      }
      shipCount++;
      console.log(length + "Ship count: " + shipCount);
      console.log("-------- END SET " + length + "SHIP --------");
      console.log(" ");
    } //Ends else
    arrayOfShips.push(blockShipArray);
  } //Ends while loop
  console.log(JSON.stringify(arrayOfShips));
}//Ends Set xblock

function checkEmptyCells(row, column, length, direction) {
  array = [];

  for (var i = 0; i < length; i++) {//this will move the checker along the ships length
    // console.log("checkEmptyCells Loop: " + i);
    if (row >= 9) { //ensures array.push can run without undefined
      row = 9;
      //this pushes the value at array position row, column
      array.push(0,board[row][column],board[row-1][column-1],board[row-1][column+1],board[row-1][column],board[row][column+1],board[row][column-1]);
      // console.log("Check array row>9:");
      // console.log(array);

      if (direction === 0 && length > 1){ //if its vertical then add to the row each loop
        row += 1;
        // console.log("Next Row: " + row + " " + column);
      } else if (direction === 1 && length > 1){ //if horizontal then add to the column each loop
        column += 1;
        // console.log("Next Column: " + row + " " + column);
      } else {
        return array.some(function(item){ //runs a blind function on array
          return item > 0;
      });
    }

    } else if (row <= 0) { //ensures array.push can run without undefined
      row = 0;
      array.push(0,board[row][column],board[row+1][column+1],board[row+1][column-1],board[row+1][column],board[row][column+1],board[row][column-1]);
      // console.log("Check array row<0:");
      // console.log(array);

      if (direction === 0 && length > 1){ //if its vertical then add to the row each loop
        row += 1;
        // console.log("Next Row: " + row + " " + column);
      } else if (direction === 1 && length > 1){ //if horizontal then add to the column each loop
        column += 1;
        // console.log("Next Column: " + row + " " + column);
      } else {
        return array.some(function(item){ //runs a blind function on array
          return item > 0;
      });
    }

    } else {
      array.push(0,board[row][column],board[row-1][column-1],board[row-1][column+1],board[row+1][column+1],board[row+1][column-1],board[row-1][column],board[row+1][column],board[row][column+1],board[row][column-1]);
      // console.log("Check array:");
      // console.log(array);

      if (direction === 0 && length > 1){ //if its vertical then add to the row each loop
        row += 1;
        // console.log("Next Row: " + row + " " + column);
      } else if (direction === 1 && length > 1){ //if horizontal then add to the column each loop
        column += 1;
        // console.log("Next Column: " + row + " " + column);
      } else {
        return array.some(function(item){ //runs a blind function on array
          return item > 0;
        });
      }
    }
}//end loop
  return array.some(function(item){ //runs a blind function on array
    return item > 0;  //if any items in array are equal to 1 then return true
  });
}//end function

function countUnsunkShips() {
  fiveBlockCount = 0; // sets initial count of ships to 0
  fourBlockCount = 0;
  threeBlockCount = 0;
  twoBlockCount = 0;
  oneBlockCount = 0;

  for (var i = 0; i < arrayOfShips.length; i++) {
    //loops through our array of ships
    if (arrayOfShips[i].length === 5 && (!(areAllXs(arrayOfShips[i])))) {
        fiveBlockCount += 1; //if lenght is 5 and NOT all items in the array are X, add 1 ship to the ship count
    } else if (arrayOfShips[i].length === 4 && (!(areAllXs(arrayOfShips[i])))) {
        fourBlockCount += 1;
    } else if (arrayOfShips[i].length === 3 && (!(areAllXs(arrayOfShips[i])))) {
        threeBlockCount += 1;
    } else if (arrayOfShips[i].length === 2 && (!(areAllXs(arrayOfShips[i])))) {
        twoBlockCount += 1;
    } else if (arrayOfShips[i].length === 1 && (!(areAllXs(arrayOfShips[i])))) {
        oneBlockCount += 1;
    } else {
    }
  }
  // console.log("----- Total Ship Counts-----")
  // console.log("FiveBlockCount:" + fiveBlockCount);
  // console.log("FourBlockCount:" + fourBlockCount);
  // console.log("ThreeBlockCount:" + threeBlockCount);
  // console.log("TwoBlockCount:" + twoBlockCount);
  // console.log("OneBlockCount:" + oneBlockCount);
}

function areAllXs(array) {
  return array.every(function(item){
    return item === "X"; //checks if every item in an array (passed through above) is an X, if so the ship is sunk
  });
}

function checkSunkShip(position) {
  console.log("Position from Model:" + position);
  for (var i = 0; i < arrayOfShips.length; i++) { //searches the array of ships outter array
    console.log(JSON.stringify(arrayOfShips));
    for (var j = 0; j < arrayOfShips[i].length; j++) { //searches each ship array for the position
      if (arrayOfShips[i][j] === position) { //if the position is in the array
        arrayOfShips[i][j] = "X"; //sets array value to X
      }
    }
  }
}

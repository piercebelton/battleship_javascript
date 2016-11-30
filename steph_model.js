
var board = []; //back-end array to hold values that are represented in View's table
var ship = 1; //Sets a ship variable to 1
var shipsRemaining = 24;
  //This needs to be the total count of squares (1 5block, 2 4block, 2 3block, 2 2block, 1 1block)
var arrayOfShips = [];
var copyArrayOfShips = arrayOfShips.concat();

function remainingShips() {
    shipsRemaining--; //Decrements the ships remaining
  }

var torpedoes = 25; //the # of torpedoes that the user has

function buildTable() { //builds back-end array to hold values that are represented in View's table
  for (var i = 0; i < 10; i++) {
    board.push([0,0,0,0,0,0,0,0,0,0]);
  }
}

function countTorpedoes() { //modifies the # of torpedoes the user has
  torpedoes--;
}

function newGame() {
  board = [];
  buildTable();
  console.clear();
  shipsRemaining = 24;
  torpedoes = 25;
}

function shipDirection(direction) { //Changes 0/1 to vertical or horizontal; need for console.log
  if (direction === 0) {
    return "Vertical";
  } else {
    return "Horizontal";
  }
}

// count sunkShips() {
//   for (var i = 0; i < board.length; i++) {
//     for (var j = 0; j < board[i].length; j++) {
//       if (board[i][j] > 0) { //checks if there's a value in the cell
//         if board[i+1][j] > 0 { //checks the row below, same column
//           if ($(thing).attr("class") === "hit")
//         }
//       }
//     }
//   }
// }

function setXBlockShips(length, shipsNeeded) {
  var shipCount = 0;
  console.log("Setting: " + shipsNeeded + " Ship Length: " + length);


  while (shipCount < shipsNeeded) { //while loop runs while shipcount is less than needed
    console.log("------- BEGIN SET " + length + "SHIP -------");

    var blockShipArray = [];

    var row = Math.floor(Math.random()*10); //random row generated 0-9
    var column = Math.floor(Math.random()*10); //random column generated 0-9
    var direction = Math.floor(Math.random()*2); //random direction vertical(0) or horizontal(1)

    console.log(length + "Ship Direction: " + shipDirection(direction));
    // console.log(length + "Ship START: " + row + " " + column);

    if (direction === 0) { //vertical ship
      while ((row + (length - 1) > 9) || (checkEmptyCells(row, column, length, direction) === true)) { //while row start plus the length of the ship is greater than 9 the ship will be built off the board, generate new row column instead
        row = Math.floor(Math.random()*10);
        column = Math.floor(Math.random()*10);
        // console.log(length + "Ship Loop Vertical: " + row + " " + column);
      }
      //If the ship will fit, then set a 1 in each square in the vertical column
      // console.log(length + "Ship SET Vertical: " + row + " " + column);
      for (var i = 0; i  < length; i++) {
        board[row + i][column] = length;
        blockShipArray.push((row + i) + "" + column);
        console.log(length + "Ship Build Vertical: " + (row + i) + " " + column);
        // console.log(JSON.stringify(blockShipArray));
      }
      shipCount++;
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


// function setSingleShips() {
//   var singleShip = 0;
//   var row = Math.floor(Math.random()*10);
//   var column = Math.floor(Math.random()*10);
//
//   console.log("SS RowCol Start: " + row + " " + column);
//
//   while (singleShip < 1) {
//     while (checkEmptyCells(row, column, 1, 0) === true) {
//       row = Math.floor(Math.random()*10);
//       column = Math.floor(Math.random()*10);
//       console.log("SS RowCol: " + row + " " +column);
//     }
//     board[row][column] = ship; //set array position row column to 1
//     console.log("SS SET RowCol: " + row + " " + column);
//     singleShip++;
//     console.log("SS Count:" + singleShip);
//     console.log(" ");
//     }
//   }

// function setFiveBlockShip() {
//   var fiveBlock = 0;
//
//   while (fiveBlock < 1) {
//     var row = Math.floor(Math.random()*10);
//     var column = Math.floor(Math.random()*10);
//     var direction = Math.floor(Math.random()*2); //random number to assign whether the ship is vertical(0) or horizontal (1)
//     console.log("5Ship Direction: " + direction);
//     console.log("5Ship START: " + row + " " + column);
//     if (direction === 0) { //if random number is 0, make vertical ship
//       while ((row + 4 > 9) || (checkEmptyCells(row, column, 5, direction) === true)) { //if column + 4 is greater than 9 the ship will go off the board, so generate a new random number instead
//         row = Math.floor(Math.random()*10);
//         column = Math.floor(Math.random()*10);
//         console.log("5Ship Loop Vertical: " + row + " " + column);
//       }
//       //If the ship will fit, then set a 1 in each square in the vertical column
//       console.log("5Ship SET Vertical: " + row + " " + column);
//       for (var i = 0; i  < 5; i++) {
//         board[row + i][column] = ship;
//         console.log("5Ship Build Vertical: " + (row + i) + " " + column);
//       }
//       fiveBlock++;
//       console.log("5Ship count: " + fiveBlock);
//       console.log(" ");
//     } else {
//       while ((column + 4 > 9) || (checkEmptyCells(row,column,5,direction) === true)) { //if the 5 block ship goes off the board then generate a new random number
//         row = Math.floor(Math.random()*10);
//         column = Math.floor(Math.random()*10);
//         console.log("5Ship Loop Horizontal: " + row + " " + column);
//       }
//       console.log("5Ship SET Horizontal: " + row + " " + column);
//       for (var i = 0; i  < 5; i++) {
//         board[row][column + i] = ship;
//         console.log("5Ship Build Horizontal: " + row + " " + (column + i));
//       }
//       fiveBlock++;
//       console.log("5Ship count: " + fiveBlock);
//       console.log(" ");
//     } //Ends else
//   } //Ends while loop
// }//Ends Set 5block
//
//
// function setFourBlockShip() {
//   var fourShip = 0;
//
//   while (fourShip < 2) { //This loop runs until there are 3 single ships
//     var row = Math.floor(Math.random()*10);
//     var column = Math.floor(Math.random()*10);
//     var direction = Math.floor(Math.random()*2); //random number to assign whether the ship is vertical(0) or horizontal (1)
//     console.log("4Ship Direction: " + direction);
//     console.log("4Ship RowCol START: " + row + " " + column);
//     if (direction === 0) { //if random number is 0, make vertical ship
//       while ((row + 3 > 9) || (checkEmptyCells(row, column, 4, direction) === true)) { //if column + 4 is greater than 9 the ship will go off the board, so generate a new random number instead
//         row = Math.floor(Math.random()*10);
//         column = Math.floor(Math.random()*10);
//         console.log("4Ship Loop Vertical: " + row + " " + column);
//       }
//       console.log("4Ship SET Vertical: " + row + " " + column);
//       //If the ship will fit, then set a 5 in each square in the vertical column
//       for (var i = 0; i  < 4; i++) {
//         board[row + i][column] = ship;
//         console.log("4Ship Build Vertical: " + (row + i) + " " + column);
//       }
//
//       fourShip++;
//       console.log("4Ship Count: " + fourShip);
//       console.log(" ");
//     } else {
//       while ((column + 3 > 9) || (checkEmptyCells(row, column, 4, direction) === true)) { //if column + 4 is greater than 9 the ship will go off the board, so generate a new random number instead
//         row = Math.floor(Math.random()*10);
//         column = Math.floor(Math.random()*10);
//         console.log("4Ship Loop Horizontal: " + row + " " + column);
//       }
//       console.log("4Ship SET Horizontal: " + row + " " + column);
//       for (var i = 0; i  < 4; i++) {
//         board[row][column + i] = ship;
//         console.log("4Ship Build Horizontal: " + row + " " + (column + i));
//       }
//       fourShip++;
//       console.log("4Ship Count: " + fourShip);
//       console.log(" ");
//     }
//   }
// }
//
// function setThreeBlockShip() {
//   var threeShip = 0;
//
//   while (threeShip < 2) { //This loop runs until there are 3 single ships
//     var row = Math.floor(Math.random()*10);
//     var column = Math.floor(Math.random()*10);
//     var direction = Math.floor(Math.random()*2); //random number to assign whether the ship is vertical(0) or horizontal (1)
//     console.log("3Ship Direction: " + direction);
//     console.log("3Ship RowCol START: " + row + " " + column);
//     if (direction === 0) { //if random number is 0, make vertical ship
//       while ((row + 2 > 9) || (checkEmptyCells(row, column, 3, direction) === true)) { //if column + 4 is greater than 9 the ship will go off the board, so generate a new random number instead
//         row = Math.floor(Math.random()*10);
//         column = Math.floor(Math.random()*10);
//         console.log("3Ship Loop Vertical: " + row + " " + column);
//       }
//       console.log("3Ship SET Vertical: " + row + " " + column);
//       //If the ship will fit, then set a 5 in each square in the vertical column
//       for (var i = 0; i  < 3; i++) {
//         board[row + i][column] = ship;
//         console.log("3Ship Build Vertical: " + (row + i) + " " + column);
//       }
//
//       threeShip++;
//       console.log("3Ship Count: " + threeShip);
//       console.log(" ");
//     } else {
//       while ((column + 2 > 9) || (checkEmptyCells(row, column, 3, direction) === true)) { //if column + 4 is greater than 9 the ship will go off the board, so generate a new random number instead
//         row = Math.floor(Math.random()*10);
//         column = Math.floor(Math.random()*10);
//         console.log("3Ship Loop Horizontal: " + row + " " + column);
//       }
//       console.log("3Ship SET Horizontal: " + row + " " + column);
//       for (var i = 0; i  < 3; i++) {
//         board[row][column + i] = ship;
//         console.log("3Ship Build Horizontal: " + row + " " + (column + i));
//       }
//       threeShip++;
//       console.log("3Ship Count: " + threeShip);
//       console.log(" ");
//     }
//   }
// }
// function setTwoBlockShip() {
//   var twoShip = 0;
//
//   while (twoShip < 2) { //This loop runs until there are 3 single ships
//     var row = Math.floor(Math.random()*10);
//     var column = Math.floor(Math.random()*10);
//     var direction = Math.floor(Math.random()*2); //random number to assign whether the ship is vertical(0) or horizontal (1)
//     console.log("3Ship Direction: " + direction);
//     console.log("3Ship RowCol START: " + row + " " + column);
//     if (direction === 0) { //if random number is 0, make vertical ship
//       while ((row + 1 > 9) || (checkEmptyCells(row, column, 2, direction) === true)) { //if column + 4 is greater than 9 the ship will go off the board, so generate a new random number instead
//         row = Math.floor(Math.random()*10);
//         column = Math.floor(Math.random()*10);
//         console.log("2Ship Loop Vertical: " + row + " " + column);
//       }
//       console.log("2Ship SET Vertical: " + row + " " + column);
//       //If the ship will fit, then set a 5 in each square in the vertical column
//       for (var i = 0; i  < 2; i++) {
//         board[row + i][column] = ship;
//         console.log("2Ship Build Vertical: " + (row + i) + " " + column);
//       }
//
//       twoShip++;
//       console.log("2Ship Count: " + twoShip);
//       console.log(" ");
//     } else {
//       while ((column + 1 > 9) || (checkEmptyCells(row, column, 2, direction) === true)) { //if column + 4 is greater than 9 the ship will go off the board, so generate a new random number instead
//         row = Math.floor(Math.random()*10);
//         column = Math.floor(Math.random()*10);
//         console.log("2Ship Loop Horizontal: " + row + " " + column);
//       }
//       console.log("2Ship SET Horizontal: " + row + " " + column);
//       for (var i = 0; i  < 2; i++) {
//         board[row][column + i] = ship;
//         console.log("2Ship Build Horizontal: " + row + " " + (column + i));
//       }
//       twoShip++;
//       console.log("2Ship Count: " + twoShip);
//       console.log(" ");
//     }
//   }
// }

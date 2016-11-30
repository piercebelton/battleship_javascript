$(document).ready(function() {
  createBoard();
  buildTable();
  // setFiveBlockShip();
  // setFourBlockShip();
  // setThreeBlockShip();
  // setTwoBlockShip();
  // setSingleShips();
  setXBlockShips(5, 1);
  setXBlockShips(4, 2);
  setXBlockShips(3, 2);
  setXBlockShips(2, 2);
  setXBlockShips(1, 1);
  showShipCount();
  // showShipCount();
  // displayShips(); // take this off to hide ships until click


//alert to be sure everything is linked properly
//call for loops from the model to create the table!
  $("td").on("click", function() {
    checkClick(this);
    showTorpedoes();
    showSunkShips(this);
    if (shipsRemaining === 0) { //Need to figure out how this count works
      $("td").off("click");
      $("#torpedoCount").text("Mission accomplished! You WIN! ");
    }
    $(this).off();
    if (torpedoes === 0) {
      $("td").off("click");
      $("#torpedoCount").text("Game over. You LOSE!");
      displayShips(this);
    }
  });

  $("#start").on("click", function() {
    location.reload();
    // newGame();
    // $("td").removeClass("hit");
    // $("td").removeClass("miss");
  });


   //build a for loop within a for loop to create a 10x10 table. The first for loop creates the rows, the second creates the columns (aka the tds)
  function createBoard() {
  for (var i = 0; i < 10; i++) {
    $("#table").append("<tr id=" + i +">");
    for (var j = 0; j < 10; j++) {
      $("#"+i).append("<td id=" + i + j + "></td>");
    }
    $("#table").append("</tr>");
    }
  }

  function showTorpedoes() {
    countTorpedoes();
    if (torpedoes === 1) {
      $("#torpedoCount").text("Torpedo remainging: " + torpedoes);
    } else {
      $("#torpedoCount").text("Torpedoes remaining: " + torpedoes);
    }
  }

  function checkClick(thing) {
    var position = $(thing).attr("id").split(""); //this takes the id attribute and splits it into 2 numbers (the row and column)
    row = position[0];
    column = position[1];
    if (board[row][column] === 0) { //this finds the value at the board/array position of the two numbers
      $(thing).addClass("miss"); //class miss is added if there is no ship (value = 0)
    } else {
      $(thing).addClass("hit"); //class hit is added if there is a ship (value = 1)
      remainingShips();
    }
  }

  function displayShips() {
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
        if (board[i][j] > 0) {
          $("#" + i + j).addClass("hit");
        }
      }
    }
  }

  function showShipCount() {
    countUnsunkShips();
    if (fiveBlockCount === 0) {
      $("#fiveblock").text("");
      $("#fiveblock").prepend("<img class='boomImage' src='http://clipartix.com/wp-content/uploads/2016/06/Art-explosion-clip-art-clipart-image.png'/>")
    } else {
      $("#fiveblock").text(fiveBlockCount);
    }
    if (fourBlockCount === 0) {
      $("#fourblock").text("");
      $("#fourblock").prepend("<img class='boomImage' src='http://clipartix.com/wp-content/uploads/2016/06/Art-explosion-clip-art-clipart-image.png'/>")
    } else {
      $("#fourblock").text(fourBlockCount);
    }
    if (threeBlockCount === 0) {
      $("#threeblock").text("");
      $("#threeblock").prepend("<img class='boomImage' src='http://clipartix.com/wp-content/uploads/2016/06/Art-explosion-clip-art-clipart-image.png'/>")
    } else {
      $("#threeblock").text(threeBlockCount);
    }
    if (twoBlockCount === 0) {
      $("#twoblock").text("");
      $("#twoblock").prepend("<img class='boomImage' src='http://clipartix.com/wp-content/uploads/2016/06/Art-explosion-clip-art-clipart-image.png'/>")
    } else {
      $("#twoblock").text(twoBlockCount);
    }
    if (oneBlockCount === 0) {
      $("#oneblock").text("");
      $("#oneblock").prepend("<img class='boomImage' src='http://clipartix.com/wp-content/uploads/2016/06/Art-explosion-clip-art-clipart-image.png'/>")
    } else {
      $("#oneblock").text(oneBlockCount);
    }
  }


// Can use this function to then run a function in the model that checks the array
function showSunkShips(thing) {
  var position = $(thing).attr("id").toString(); //this takes the id attribute and splits it into 2 numbers (the row and column)
  console.log(position);
  checkSunkShip(position);
  showShipCount();
}

// set the value as a variable so you can check the full lenght of the boat
// then run a loop on vertical or horizontal based on where it fines another same value



//
// //count the cells that contain a value of length that do not have hit
//
//         //hits are assigned a class hit
//         //identify ships by getting value then check # of hits



});

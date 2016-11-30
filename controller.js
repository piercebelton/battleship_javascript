$(document).ready(function() {
  createBoard();
  buildTable();
  setXBlockShips(5, 1);
  setXBlockShips(4, 2);
  setXBlockShips(3, 2);
  setXBlockShips(2, 2);
  setXBlockShips(1, 1);
  showShipCount();
  // displayShips(); // take this off to hide ships until click


  $("td").on("click", function() {
    clickHitMiss(this); //checks if the cell is a hit or miss
    showTorpedoes(); //shows number of torpedoes left
    showSunkShips(this); //shows number of ships remaining
    if ((((fiveBlockCount === 0 && fourBlockCount === 0) && threeBlockCount === 0) && twoBlockCount === 0) && oneBlockCount === 0) { //if all ships counts are zero
      $("td").off("click"); //turn off clicking
      $("#torpedoCount").text("Mission accomplished! You WIN! "); //set message
    }
    $(this).off();
    if (torpedoes === 0) { //if torpedo count is zero
      $("td").off("click"); //turn off clicking
      $("#torpedoCount").text("Game over. You LOSE!"); //set message
      displayShips(this); //then display all ships
    }
  });

  $("#start").on("click", function() {
    $("td").off();
    newGame();
    $("td").removeClass("hit");
    $("td").removeClass("miss");
    setXBlockShips(5, 1);
    setXBlockShips(4, 2);
    setXBlockShips(3, 2);
    setXBlockShips(2, 2);
    setXBlockShips(1, 1);
    // displayShips();
    $("#fiveblock").text(0);
    $("#fourblock").text(0);
    $("#threeblock").text(0);
    $("#twoblock").text(0);
    $("#oneblock").text(0);
    $("td").on("click", function() {
      clickHitMiss(this); //checks if the cell is a hit or miss
      showTorpedoes(); //shows number of torpedoes left
      showSunkShips(this); //shows number of ships remaining
      if ((((fiveBlockCount === 0 && fourBlockCount === 0) && threeBlockCount === 0) && twoBlockCount === 0) && oneBlockCount === 0) { //if all ships counts are zero
        $("td").off("click"); //turn off clicking
        $("#torpedoCount").text("Mission accomplished! You WIN! "); //set message
      }
      $(this).off();
      if (torpedoes === 0) { //if torpedo count is zero
        $("td").off("click"); //turn off clicking
        $("#torpedoCount").text("Game over. You LOSE!"); //set message
        displayShips(this); //then display all ships
      }
    });
  });



  function createBoard() {
  for (var i = 0; i < 10; i++) { //first loop creates the TRs with id of i
    $("#table").append("<tr class='board' id=" + i +">");
    for (var j = 0; j < 10; j++) { //loop creates TDs with id of ij and board class
      $("#"+i).append("<td class='board' id=" + i + j + "></td>");
    }
    $("#table").append("</tr>");//closes the TRs after TD loop runs
    }
  }

  function showTorpedoes() {
    countTorpedoes(); //calls countTorpedoes function
    if (torpedoes === 1) { //handles plural vs singular
      $("#torpedoCount").text("Torpedo remainging: " + torpedoes);
    } else {
      $("#torpedoCount").text("Torpedoes remaining: " + torpedoes); //sets message
    }
  }

  function clickHitMiss(thing) {
    var position = $(thing).attr("id").split(""); //takes the id attribute and splits it into 2 numbers
    row = position[0];
    column = position[1];
    if (board[row][column] === 0) { //finds the value at the board/array position of the two numbers
      $(thing).addClass("miss"); //class miss is added if there is no ship (value = 0)
    } else {
      $(thing).addClass("hit"); //class hit is added if there is a ship (value > 0)
      // remainingShips();
    }
  }

  function displayShips() {
    for (var i = 0; i < board.length; i++) { //loops through 10 rows
      for (var j = 0; j < board[i].length; j++) { //loops through 10 columns in each row
        if (board[i][j] > 0) { //if the backend array has a value greater than 0, there's a ship
          $("#" + i + j).addClass("hit"); //add hit class to any cell with a ship in it
        }
      }
    }
  }

  function showShipCount() {
    countUnsunkShips();
    if (fiveBlockCount === 0) { //if the count of fiveblock ships is zero
      $("#fiveblock").text(""); //set text to nothing
      $("#fiveblock").prepend("<img class='boomImage' src='explosion.png'/>") //append explosion img
    } else {
      $("#fiveblock").text(fiveBlockCount); //otherwise, set the count
    }
    if (fourBlockCount === 0) {
      $("#fourblock").text("");
      $("#fourblock").prepend("<img class='boomImage' src='explosion.png'/>")
    } else {
      $("#fourblock").text(fourBlockCount);
    }
    if (threeBlockCount === 0) {
      $("#threeblock").text("");
      $("#threeblock").prepend("<img class='boomImage' src='explosion.png'/>")
    } else {
      $("#threeblock").text(threeBlockCount);
    }
    if (twoBlockCount === 0) {
      $("#twoblock").text("");
      $("#twoblock").prepend("<img class='boomImage' src='explosion.png'/>")
    } else {
      $("#twoblock").text(twoBlockCount);
    }
    if (oneBlockCount === 0) {
      $("#oneblock").text("");
      $("#oneblock").prepend("<img class='boomImage' src='explosion.png'/>")
    } else {
      $("#oneblock").text(oneBlockCount);
    }
  }


function showSunkShips(thing) {
  var position = $(thing).attr("id").toString(); //takes the id attr and ensures its a string
  // console.log(position);
  checkSunkShip(position); //passes position into checkSunkShip function
  showShipCount(); //runs show ship count to update the board with sunk ships
}


});

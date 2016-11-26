$(document).ready(function() {
  createBoard();
  buildTable();
  // setFiveBlockShip();
  // setFourBlockShip();
  // setThreeBlockShip();
  // setTwoBlockShip();
  // setSingleShips();
  setXblockShips(5, 1);
  setXblockShips(4, 2);
  setXblockShips(3, 2);
  setXblockShips(2, 2);
  setXblockShips(1, 1);

  // displayShips(); // take this off to hide ships until click


//alert to be sure everything is linked properly
//call for loops from the model to create the table!
  $("td").on("click", function() {
    checkClick(this);
    showTorpedoes();
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
    if (board[position[0]][position[1]] === 0) { //this finds the value at the board/array position of the two numbers
      $(thing).addClass("miss"); //class miss is added if there is no ship (value = 0)
    } else {
      $(thing).addClass("hit"); //class hit is added if there is a ship (value = 1)
      remainingShips();
    }
  }

  function displayShips() {
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
        if (board[i][j] === 1) {
          $("#" + i + j).addClass("hit");
        }
      }
    }
  }



});

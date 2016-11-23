$(document).ready(function() {
  createBoard();
  buildTable();
  setShips();

//alert to be sure everything is linked properly
//call for loops from the model to create the table!
  $("td").on("click", function() {
    checkClick(this);
    showTorpedoes();
    if (shipsRemaining === 0) {
      $("td").off();
      $("#torpedoCount").text("Game over. You WIN!");
    }
    $(this).off();
    if (torpedoes === 0) {
      $("td").off();
      $("#torpedoCount").text("Game over. You LOSE!");
      displayShips(this);
    }
  });

  $("#start").on("click", function() {
  buildTable();

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
      $("#torpedoCount").text("You have " + torpedoes + " torpedo left.");
    } else {
      $("#torpedoCount").text("You have " + torpedoes + " torpedoes left.");
    }
  }

  function checkClick(thing) {
    var position = $(thing).attr("id").split("");
    if (board[position[0]][position[1]] === 0) {
      $(thing).addClass("miss");
    } else {
      $(thing).addClass("hit");
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

$(document).ready(function() {
  createBoard();
  buildTable();
  setShips();

//alert to be sure everything is linked properly
//call for loops from the model to create the table!
  $("td").on("click", function() {
    $(this).addClass("clicked");
    countTorpedoes();
    if (torpedoes === 1) {
      $("#torpedoCount").text("You have used " + torpedoes + " torpedo!");
    } else {
      $("#torpedoCount").text("You have used " + torpedoes + " torpedoes!");
    }
    $(this).off();
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





});

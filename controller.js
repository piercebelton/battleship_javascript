$(document).ready(function() {
//alert to be sure everything is linked properly
//call for loops from the model to create the table!
  $("#start").on("click", function() {
  buildTable();
   //build a for loop within a for loop to create a 10x10 table. The first for loop creates the rows, the second creates the columns (aka the tds)
    for (var i = 0; i < 10; i++) {
      $("#table").append("<tr>");
      for (var j = 0; j < 10; j++) {
        $("#table").append("<td id=" + i + j + "></td>");
      }
      $("#table").append("</tr>");
    }
  });








});

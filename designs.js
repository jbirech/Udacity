/* Project pixel art maker is one of the projects one has to do as part of the challenges while taing the front end web development Nanodegree
course.
made a limited number of input of the Grid height and width defined in the index.html as 500.
The page also is slower with large values. Jquery makes the page slower.
Default grid color #000
Prevent default submit behavior and call makeGrid function
Allows the user to pick a color then it changes the color to the one selected by the user\
 */



$(function() 
{
  var drawGrid,getColor;
  var getColor = "#000";
  drawGrid = $("#pixel_canvas");
  getColor = "#000";

  $("#sizePicker").submit(function(event) 
  {
    event.preventDefault();
    makeGrid();
  });

  $("#colorPicker").change(function() 
  {
    getColor = $(this).val();
  });

  drawGrid.on("mousemove", "td", function(event) 
  {
    if (event.buttons == 1) {
      $(this).css("background-color", getColor);
    }
  });

  drawGrid.on("click", "td", function(event) 
  {
    $(this).css("background-color", getColor);
  });
  /*
  Build the grid
  takes in the user's definined input size
  Empty the grid to avoid creating the grid over and over again each time someone clicks submit.
  using nested loops to create the Grid's row and the grids columns.
  */
  
  function makeGrid() 
  {
    var inputHeight,inputWidth;
    inputHeight = $("#input_height").val();
    inputWidth = $("#input_width").val();
    drawGrid.empty();
    for (x = 0; x <= inputHeight - 1; x++) 
    {
      drawGrid.append("<tr>");
      for (y = 0; y <= inputWidth - 1; y++) 
      {
        $("tr:eq(" + x + ")").append("<td></td>");
      }
      drawGrid.append("</tr>");
    }
  }
});

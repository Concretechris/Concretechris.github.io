$(document).ready(function() {
    $("#reset").click(function(){
    $(".container").remove();
    $(".cell").remove();
    var col = prompt("Please enter the number of columns: ");
    var rows = prompt("Please enter the number rows: ");
    
    for (var i = 1; i <= rows; i++)
    {
      $d = $("<div class = 'container'></div>");
      $(".new_container").append($d);
      $(".container").height(960/rows);
    }
    for (var j = 1; j <= col; j++)
    {
      $c = $("<div class = 'cell'></div>");
      $(".container").append($c);
      $(".cell").height(960/col);
    }
      $(".cell").mouseenter(function(){
        $(this).addClass("black");
    });
});
  $("h1").mouseenter(function() {
    $("h1").fadeTo("slow", .5);
  });
  $("h1").mouseleave(function() {
    $("h1").fadeTo("slow", 1.0);
  });
  $(".cell").mouseenter(function(){
    $(this).addClass("black");
  });
      $("#clear").click(function(){
        $(".cell").removeClass("black");
        $(".cell").height("200px");
        $(".cell").width("200px");
  });
});

//add spans function and global div/span variables

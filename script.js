$(document).ready(function() {
    $('body').prepend("<div class = 'new_container'></div>");
    
    $('.new_container').prepend(
        for (var a = 1; a =16; a++)
            {
                $a = $("<div class = 'container'></div>");
                $(".new_container").append($a);
                $(".container").height(960/16);
            }
    )
    $('.container').prepend(
        for (var b = 1; b =16; b++)
            {
                $b = $("<div class = 'container'></div>");
                $(".new_container").append($b);
                $(".container").height(960/16);
            }
    )
    
$("#reset").click(function(){
    $(".container").remove();
    $(".cell").remove();
    var col = prompt("Please enter the number of columns: ");
    var rows = prompt("Please enter the number rows: ");
    
    for (var i = 1; i < rows; i++)
    {
      $d = $("<div class = 'container'></div>");
      $(".new_container").append($d);
      $(".container").height(960/rows - 2);
    }
    for (var j = 1; j <= col; j++)
    {
      $c = $("<div class = 'cell'></div>");
      $(".container").append($c);
        $(".cell").width(960/col - 4);
        $(".cell").height(960/col - 4);
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
  });
});

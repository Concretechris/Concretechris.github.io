$(document).ready(function() {
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
      $("#reset").click(function(){
        $(".container").remove();
        $(".cell").remove();
        var col = prompt("Please enter the number of columns: ");
        var rows = prompt("Please enter the number rows: ");
        $(".new_container").append("<p>Stuff Happens, Magical Stuff</p>");
      });
});

//add spans function and global div/span variables

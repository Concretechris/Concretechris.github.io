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
      $("button").click(function(){
    $(".cell").removeClass("black");
  });
});

//add spans function and global div/span variables

function myFunction() {
    var para = document.createElement("P");
    var t = document.createTextNode("This is a paragraph.");
}

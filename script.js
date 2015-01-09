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
});


//add spans function and global div/span variables

function add_spans()
{
  for (var i = 1; i <= 2; i++)
    {
      document.getElementsByClassName("container").innerHTML = "<span>This is a test</span>";
    }
}

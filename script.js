$(document).ready(function() {
  $("h1").mouseenter(function() {
    $("h1").fadeTo("slow", .5);
  });
  $("h1").mouseleave(function() {
    $("h1").fadeTo("slow", 1.0);
  });
  $("div").mouseenter(function(){
    $(this).css({
      background-color: black,
      opacity: 1;
      });
  });
});

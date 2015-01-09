$(document).ready(function() {
  $("h1").mouseenter(function() {
    $("h1").fadeto("slow", .5);
  });
  $("h1").mouseleave(function() {
    $("h1").fadeto("slow", 1.0);
  });
});

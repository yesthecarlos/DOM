$(document).ready(function() {
  $("button#hello").click(function() {
    $("body").removeClass()
    $("body").addClass("blue-background")
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
  });
  

  $("button#goodbye").click(function() {
    $("body").removeClass()
    $("body").addClass("green-background")
    $("ul").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("body").removeClass()
    $("body").addClass("red-background")
    $("ul").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#lorem").click(function() {
    $("body").removeClass()
    $("body").addClass("white-background")
    $("p#salad").show();
    $("p#salad").click(function() {
      $(this).remove();
    });
  });

});

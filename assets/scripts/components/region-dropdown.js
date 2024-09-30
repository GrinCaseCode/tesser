$(document).ready(function() {

  $(".region-main__value").click(function() {
    if ($(".region-main__dropdown").is(":hidden")) {
      $(this).addClass("active");
      $(".region-main__dropdown").fadeIn(200);
    } else {
      $(".region-main__dropdown").fadeOut(200);
      $(this).removeClass("active");
    }
  });

});
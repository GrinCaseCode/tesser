$(document).ready(function() {

  $(".region-main__value").click(function() {
    $(".menu-dropdown").slideUp(200);
    $(".btn-catalog").removeClass("active");
    $(".sandwich").removeClass("active");
    $("body").removeClass("body_menu");
    $(".menu-overlay").fadeOut(200);
    $(".menu-dropdown").removeClass("active");
    $(".search-form").fadeOut(200);
    if ($(".region-main__dropdown").is(":hidden")) {
      $(this).addClass("active");
      $(".region-main__dropdown").fadeIn(200);
    } else {
      $(".region-main__dropdown").fadeOut(200);
      $(this).removeClass("active");
    }
  });

});
$(document).ready(function() {


    //кнопка sandwich
    $(".btn-catalog").click(function() {
      $(".region-main__dropdown").fadeOut(200);
      $(".region-main__value").removeClass("active");
      $(".search-form").fadeOut(200);
      if ($(".menu-dropdown").is(":hidden")) {
        $(".menu-dropdown").slideDown(200);
        $(this).addClass("active");
        $(".menu-overlay").fadeIn(200);
      } else {
        $(".menu-dropdown").slideUp(200);
        $(this).removeClass("active");
        $(".menu-overlay").fadeOut(200);
      }
    });
    $(".menu-overlay").click(function() {
      $(".menu-dropdown").slideUp(200);
      $(".btn-catalog").removeClass("active");
      $(".sandwich").removeClass("active");
      $("body").removeClass("body_menu");
      $(".menu-overlay").fadeOut(200);
      $(".menu-dropdown").removeClass("active");
    });

    $(".sandwich").click(function() {
      $(".region-main__dropdown").fadeOut(200);
      $(".region-main__value").removeClass("active");
      $(".search-form").fadeOut(200);
      if ($(".menu-dropdown").hasClass("active")) {
        $(".menu-dropdown").removeClass("active");
        $(this).removeClass("active");
        $(".menu-overlay").fadeOut(200);
        $("body").removeClass("body_menu");
      } else {
        $(".menu-dropdown").addClass("active");
        $("body").addClass("body_menu");
        $(this).addClass("active");
        $(".menu-overlay").fadeIn(200);
      }
    });


  });
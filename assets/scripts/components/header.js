
$(document).ready(function() {
//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }

  $('.btn-header_search').click(function(event) {
		event.preventDefault();
    $(".menu-dropdown").slideUp(200);
    $(".btn-catalog").removeClass("active");
    $(".sandwich").removeClass("active");
    $("body").removeClass("body_menu");
    $(".menu-overlay").fadeOut(200);
    $(".menu-dropdown").removeClass("active");
    $(".region-main__dropdown").fadeOut(200);
    $(".region-main__value").removeClass("active");
		$(".search-form").fadeIn(200);
	});

  $('.search-form__close').click(function(event) {
		event.preventDefault();
		$(".search-form").fadeOut(200);
	});

});
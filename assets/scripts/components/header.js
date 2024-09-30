
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
		$(".search-form").fadeIn(200);
	});

  $('.search-form__close').click(function(event) {
		event.preventDefault();
		$(".search-form").fadeOut(200);
	});

});
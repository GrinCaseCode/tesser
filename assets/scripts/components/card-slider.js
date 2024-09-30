

$(document).ready(function() {
  $('.card-nav__item img').on('click', function() {
    var index = $(this).parent().index();
  
    // Скрыть все изображения в card-for и показать только выбранное
    $(this).closest(".card-slider").find('.card-for__item').hide().eq(index).show();
  });

  $('.card-select__item').click(function(event) {
    event.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $(".tab-pane-card").fadeOut(0);
    var selectTab = $(this).attr("href");
    $(selectTab).fadeIn(200);
  });
  
});
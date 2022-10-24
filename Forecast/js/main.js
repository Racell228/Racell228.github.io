$(document).ready(function() {
  $('.target_item_black_item').click(function(event) {
      event.preventDefault();
      $(this).find('.target_item_black_hide').toggle(400);
      $(this).find('.target_item_black_item_title img').toggleClass('active');
  });
});
//Переключение навыков(О нас)
$(document).ready(function() {
  $('.target_nav_link').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(300).siblings(0).fadeOut(0);
  });
});
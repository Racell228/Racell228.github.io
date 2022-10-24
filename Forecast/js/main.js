$(document).ready(function() {
  $('.target_item_black_item').click(function(event) {
      event.preventDefault();
      $(this).find('.target_item_black_hide').toggle(400);
      $(this).find('.target_item_black_item_title img').toggleClass('active');
  });
});
$(document).ready(function() {
  $('.target_nav_link').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(300).siblings(0).fadeOut(0);
  });
});
$(document).ready(function() {
  $('.header_burger').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active');
      $('.menu').toggle(400);
      $('html,body').toggleClass('overflow');
  });
});


$(document).ready(function() {
  $('.menu_item').click(function(){
    $('.header_burger').removeClass('active');
    $('.menu').hide(400);
    $('html,body').removeClass('overflow');
    var el = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(el).offset().top}, 1000);
    return false;
  });
});
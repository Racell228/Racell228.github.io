$(document).ready(function() {
  $('select').styler();
});
$(document).ready(function(){
  $('.subheader_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows:true,
    prevArrow: '<button type="button" class="left slider_arrow"></button>',
    nextArrow: '<button type="button" class="right slider_arrow"></button>',
    // autoplay:true,
    // autoplaySpeed: 10000,
  });
});
$(document).ready(function() {
  $('.signin:first-child').show();
  $('.signin_head_nav_item').click(function(event) {
      $(this).addClass('www').siblings().removeClass('www');
      var id = $(this).attr('href');
      $(id).fadeIn(0).siblings(0).fadeOut(0);
  });
});
$(document).ready(function() {
  $('.personal_items:first-child').show();
  $('.personal_head_links').click(function(event) {
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(0).siblings(0).fadeOut(0);
  });
});
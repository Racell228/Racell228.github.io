$(document).ready(function(){
  $('.efficiency_slider_left').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
$(document).ready(function(){
  $('.efficiency_slider_right').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
    dots: false,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
$(document).ready(function() {
  $('.index_header_burger').click(function(event) {
      event.preventDefault();
      $('.index_header_overlay').show(400);
      $('.header_nav').show(400);
  });
});
$(document).ready(function() {
  $('.header_nav_close').click(function(event) {
      event.preventDefault();
      $('.header_nav').hide(400);
  });
});
$(document).ready(function() {
  $('.index_header_close').click(function(event) {
      event.preventDefault();
      $('.index_header_overlay').hide(400);
  });
});
if(window.matchMedia('(max-width: 480px)').matches){
  $(document).ready(function() {
  $('.steps_item').click(function(event) {
      event.preventDefault();
      $(this).find('.steps_item_contant').toggle(400);
      $(this).toggleClass('active');
    });
  });
}
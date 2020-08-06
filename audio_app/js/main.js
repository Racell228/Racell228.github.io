$(document).ready(function(){
  $('.books_item_overlay').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left slider_arrow"></button>',
    nextArrow: '<button type="button" class="right slider_arrow"></button>'
  });
});
$(document).ready(function(){
  $('.reviews_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left_review slider_arrow"></button>',
    nextArrow: '<button type="button" class="right_rewiew slider_arrow"></button>'
  });
});
$(document).ready(function() {
  $('.questions_item').click(function(event) {
      event.preventDefault();
      $(this).find('.questions_item_answer').toggle(400);
      $(this).find('.questions_item_close').toggleClass('active');
  });
});
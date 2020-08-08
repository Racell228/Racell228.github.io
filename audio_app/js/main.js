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
    nextArrow: '<button type="button" class="right_rewiew slider_arrow"></button>',
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
  });
});
$(document).ready(function() {
  $('.questions_item').click(function(event) {
      event.preventDefault();
      $(this).find('.questions_item_answer').toggle(400);
      $(this).find('.questions_item_close').toggleClass('active');
  });
});
jQuery(document).ready(function() {
  jQuery(".scroll").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});
$(document).ready(function() {
  $('.books_item').click(function(event) {
      event.preventDefault();
      $('.modal').show(400);
      $('html').addClass('html_hidden');
  });
}); 
$(document).ready(function() {
  $('.modal_close').click(function(event) {
      event.preventDefault();
      $('.modal').hide(400);
      $('html').removeClass('html_hidden');
  });
}); 
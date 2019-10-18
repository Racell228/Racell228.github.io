
$(document).ready(function(){
  $('.hero_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.slider-nav',
    prevArrow: '<button type="button" class="left btn-juliet"><img src="img/shipping_arrow.png" class="left__img" alt=""></button>',
    nextArrow: '<button type="button" class="right btn-juliet"><img src="img/shipping_arrow.png"  class="right__img" alt=""></button>'
  });
});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.hero_slider',
  focusOnSelect: true
});

$(document).ready(function(){
  $('.hero_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="left btn-juliet"><img src="img/shipping_arrow.png" class="left__img" alt=""></button>',
    nextArrow: '<button type="button" class="right btn-juliet"><img src="img/shipping_arrow.png"  class="right__img" alt=""></button>'
  });
});

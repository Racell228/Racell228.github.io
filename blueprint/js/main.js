$(document).ready(function(){
  $('.slider').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slider_btn left"></button>',
    nextArrow: '<button type="button" class="slider_btn right"></button>',
    dots: false
  });
});
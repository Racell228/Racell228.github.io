$(document).ready(function(){
  $('.red_list_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
    dots: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});
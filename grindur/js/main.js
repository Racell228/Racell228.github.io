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
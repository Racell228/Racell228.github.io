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
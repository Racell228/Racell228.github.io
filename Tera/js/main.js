$(document).ready(function(){
  $('.hero_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows:false,
    autoplay:true,
    autoplaySpeed: 10000,
  });
});
$(document).ready(function(){
  $('.reviews_slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows:true,
    prevArrow: '<button type="button" class="left slider_arrow"></button>',
    nextArrow: '<button type="button" class="right slider_arrow"></button>',
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  });
});
jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 50) {
        $('header').addClass('active');
        $('.header_logo').hide();
        $('.header_logo_black').show();
        $('.burger_black').show();
        $('.burger_white').hide();
    }
    else {
        $('header').removeClass('active');
        $('.header_logo').show();
        $('.header_logo_black').hide();
        $('.burger_black').hide();
        $('.burger_white').show();
    }
});
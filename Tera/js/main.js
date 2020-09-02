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
  $('.single_left').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows:false,
  });
});
$('.slider_next').on('click', function() {
  $('.single_left').slick('slickNext');
});
$('.slider_prev').on('click', function() {
  $('.single_left').slick('slickPrev');
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
$(".header_burger").click(function() {
  $(".mobile_overlay").show();
  $("html,body").toggleClass('overflow');
});
$(".close_burger").click(function() {
  $(".mobile_overlay").hide();
  $("html,body").removeClass('overflow');
});



if (window.matchMedia("(max-width: 480px)").matches) {
  $(".nav_link:first-child").click(function() {
  $('nav').toggleClass('active');
  $(this).toggleClass('nav_active');
});
}
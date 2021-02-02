$(document).ready(function(){
  $('.welcome_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
    dots: false,
    responsive: [
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });
});
jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    var heroWidth = $('.hero').height();
    if (the_top > heroWidth) {
        $('#home_header').addClass('header_fixed');
        $('.mobile_header').addClass('mobile_header_show');
    }
    else {
        $('#home_header').removeClass('header_fixed');
        $('.mobile_header').removeClass('mobile_header_show');
    }
});
jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 50) {
        $('#header').addClass('header_fixed');
    }
    else {
        $('#header').removeClass('header_fixed');
    }
});

$(document).ready(function() {
  $('.mobile_header_open,.hero_burger').click(function(event) {
      event.preventDefault();
      $('.burger_menu').show(400);
       $('html').addClass('hidden');
  });
});
$(document).ready(function() {
  $('.burger_menu_head_close').click(function(event) {
      event.preventDefault();
      $('.burger_menu').hide(400);
       $('html').removeClass('hidden');
  });
});




$(window).scroll(function() {
  $('.up').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+850) {
       $(this).addClass("fadeInUp");
     }
     else {
      $(this).removeClass("fadeInUp");
     }
  });
});
$(window).scroll(function() {
  $('.down').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+850) {
       $(this).addClass("fadeInDown");
     }
     else {
      $(this).removeClass("fadeInDown");
     }
  });
});
$(window).scroll(function() {
  $('.anleft').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+850) {
       $(this).addClass("fadeInLeft");
     }
     else {
      $(this).removeClass("fadeInLeft");
     }
  });
});
$(window).scroll(function() {
  $('.anright').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+850) {
       $(this).addClass("fadeInRight");
     }
     else {
      $(this).removeClass("fadeInRight");
     }
  });
});
$(window).scroll(function() {
  $('.titleup').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+850) {
       $(this).addClass("active");
     }
     else {
     
     }
  });
});
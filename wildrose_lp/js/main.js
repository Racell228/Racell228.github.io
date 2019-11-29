$(document).ready(function(){
  $('.hero_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay:true,
    // autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="left btn-juliet"><img src="img/slider_arrow.png" class="left__img" alt=""></button>',
    nextArrow: '<button type="button" class="right btn-juliet"><img src="img/slider_arrow.png"  class="right__img" alt=""></button>'
  });
});
$(document).ready(function() {
  $('.faq_item').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('faq_answer_active');
      $(this).find('h4').toggleClass('faq_item_active');
      $(this).find('.faq_item_arrow').toggleClass('faq_item_arrow_active');
  });
});

$(window).scroll(function() {
    $('.mov').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).addClass('fadeInRight');
      }
    });
  });

$(window).scroll(function() {
    $('.mov1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).addClass('zoomIn');
      }
    });
  });

$(window).scroll(function() {
    $('.mov2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).addClass('bounceInLeft');
      }
    });
  });

$(window).scroll(function() {
    $('.mov3').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).addClass('bounceInRight');
      }
    });
  });

$(window).scroll(function() {
    $('.mov3').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).addClass('bounceIn');
      }
    });
  });
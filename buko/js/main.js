$(".catalog_item_slider").each(function () {
    var slider = $(this);
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="left"></button>',
        nextArrow: '<button type="button" class="right"></button>',
        appendArrows: slider.parent().parent('.catalog_item').find('.catalog_item_nav'),
        rows: 0,
    });
    slider.on('init reInit afterChange', function(event, slick){
	    slider.parent('.catalog_item_slider_overlay').find('.catalog_item_slider_current').text(parseInt(slick.currentSlide + 1));
	    slider.parent('.catalog_item_slider_overlay').find('.catalog_item_slider_count').text("/" + slick.slideCount);
	});
});
$(function($){
   $(".tel").mask("+380 (99) 999 - 99 - 99");
});

$(document).ready(function() {
  $('.header_burger').click(function(event) {
      event.preventDefault();
      $('.mobile_menu').toggleClass('active');
      $(this).toggleClass('active');
  });
});  

$(document).ready(function() {
  $('.mobile_menu_lang_current').click(function(event) {
      event.preventDefault();
      $('.mobile_menu_lang_hide').toggle(400);
      $(this).toggleClass('active');
  });
});  

$(document).ready(function() {
  $('.mobile_menu_contacts_current').click(function(event) {
      event.preventDefault();
      $('.mobile_menu_contacts_hide').toggle(400);
      $(this).toggleClass('active');
  });
});  
$(document).ready(function() {
  $('.header_lang_current').click(function(event) {
      event.preventDefault();
      $('.header_lang_hide').toggle(400);
      $(this).toggleClass('active');
  });
});  

$(document).ready(function() {
  $('.scroll').click(function(){

  	$('.mobile_menu').removeClass('active');
    $('.header_burger').removeClass('active');

    var el = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(el).offset().top}, 1000);
    return false;
  });
});


$(window).scroll(function() {
    $('.animate').each(function(){
        var Pos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var height = $(window).height();
        if (Pos < topOfWindow + height - 150) {
            $(this).addClass("show");
        }
        else {
            $(this).removeClass("show");
        }
    });
});
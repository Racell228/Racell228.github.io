
//Слайдер
$('.dzing_slider_overlay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
});
$('.cards_item-js').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
     responsive: [
    {
      breakpoint: 769,
      settings: {
        autoplay: true,
  		autoplaySpeed: 5000,
      }
    },
    ]
});
$(document).ready(function() {
  $('.cards_item:first-child').show();
  $('.cards_nav_item').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(300).siblings(0).fadeOut(0);
  });
});
$(document).ready(function() {
  $('.burger').click(function(event) {
    $('.header_nav').toggleClass('active');
    $('.burger_icon').toggle(0);
    $('.close_icon').toggle(0);
    $('body,html').toggleClass('hidden');
  });
});
$(document).ready(function() {
  $('.header_download_item').click(function(event) {
  	event.preventDefault();
    $('.get').show();
  });
});

$(document).ready(function() {
  $('.get_close').click(function(event) {
  	event.preventDefault();
    $('.get').hide();
  });
});
$(document).ready(function() {
  $('.close').click(function(event) {
  	event.preventDefault();
    $('.modal').hide();
  });
});
$(document).ready(function() {
  $('.terms-js').click(function(event) {
  	event.preventDefault();
    $('.terms').show();
  });
});
$(document).ready(function() {
  $('.policy-js').click(function(event) {
  	event.preventDefault();
    $('.policy').show();
  });
});
$(document).ready(function() {
  $('.fees-js').click(function(event) {
  	event.preventDefault();
    $('.fees').show();
  });
});
$(document).ready(function() {
  $('.fees_table:first-child').show();
  $('.fees_nav_item').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(300).siblings(0).fadeOut(300);
  });
});


$(document).ready(function() {
  $('.scroll').click(function(){
    var el = $(this).attr('href');
    $('.header_nav').removeClass('active');
    $('body,html').removeClass('hidden');
    $('html,body').animate({
      scrollTop: $(el).offset().top}, 1000);
    return false;
  });
});
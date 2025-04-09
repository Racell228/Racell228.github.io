$(".advantages").each(function () {
    var slider = $(this);
    slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="left"></button>',
        nextArrow: '<button type="button" class="right"></button>',
        rows: 0,
        centerMode: true,
    });
});
$(".rooms_overlay").each(function () {
    var slider = $(this);
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="left"></button>',
        nextArrow: '<button type="button" class="right"></button>',
        rows: 0,
    });
});

$(document).ready(function() {
  $('.price_nav_item').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(300).siblings(0).fadeOut(0);
  });
});

$(".single_gallery_slider").each(function () {
    var slider = $(this);
    slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="left"></button>',
        nextArrow: '<button type="button" class="right"></button>',
        rows: 0,
        variableWidth: true,
        centerMode: true,
        dots: true,
        appendDots: $('.single_gallery_nav'),
    });
});


$(document).ready(function() {
  $('.header_menu').click(function(event) {
    event.preventDefault();
      $('.menu').show(400);
  });
});
$(document).ready(function() {
  $('.menu_close').click(function(event) {
    event.preventDefault();
      $('.menu').hide(400);
  });
});

$(document).ready(function() {
  $('.info_nav_item').click(function(){
    var el = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(el).offset().top - 100}, 1000);
    return false;
  });
});




// $(window).scroll(function() {
//   var height = $(window).scrollTop();
//   var top = $('.page_hero').height() + $('.single_nav').height() + 300;
//   if(height > top){
//   $('.info_nav').addClass('info_nav_fixed');
//   } else{
//     $('.info_nav').removeClass('info_nav_fixed');
//   }
// });

  // $(window).scroll(function() {
  // var height = $(window).scrollTop();
  // var top = $('.info_overlay').height();
  // if(height > top ){
  //   $('.info_nav').addClass('info_nav_absolute');
  // } else{
  //   $('.info_nav').removeClass('info_nav_absolute');
  // }
  // });


  // $(window).scroll(function() {
  // var height = $(window).scrollTop();
  // var top = $('.info_overlay').height();
  // if(height > top ){
  //   $('.info_nav').addClass('info_nav_absolute');
  // } else{
  //   $('.info_nav').removeClass('info_nav_absolute');
  // }
  // });
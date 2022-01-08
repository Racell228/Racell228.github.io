$(document).ready(function() {
  $('select').styler();
});
$(document).ready(function() {
  $('.single_info_descr_nav_item,.checkout_content_personal_nav_item,.personal_nav_item').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(300).siblings(0).fadeOut(0);
  });
});

$(document).ready(function() {
  $('.sub_header_nav_item').click(function(event) {
    event.preventDefault();
      $(this).parent().find('.sub_header_content_item_wrapper').toggle(400);
      $(this).find('.sub_header_nav_item_arrow').toggleClass('active');
      $(this).toggleClass('active');
  });
});
$('.single_slider_item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  prevArrow:'<button class="prev"></button>',
  nextArrow:'<button class="next"></button>',
  infinite: true,
  asNavFor: '.single_slider_nav',
});
$('.single_slider_nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.single_slider_item',
  dots: false,
  arrows: false,
  infinite: true,
  vertical: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

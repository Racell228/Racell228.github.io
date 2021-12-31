$('.single_slider_item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
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
});
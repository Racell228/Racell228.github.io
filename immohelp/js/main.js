$(document).ready(function() {
  $('select').styler();
});

$(document).ready(function(){
  $('.variants_slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    margin: 25,
    dots: true,
    arrows:true,
    prevArrow: '<button type="button" class="left slider_arrow"></button>',
    nextArrow: '<button type="button" class="right slider_arrow"></button>',
  });
});

$(document).ready(function() {
  $('.read_more').click(function(event) {
    event.preventDefault();
      $('.gallery_text_overlay').addClass('active');
      $(this).hide(0);
  });
});
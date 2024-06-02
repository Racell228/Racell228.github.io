$('.product_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    variableWidth:true,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
    rows: 0,
    centerMode: true,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$(document).ready(function() {
  $('.header_nav a,.footer_nav a,.hero_btn,.header_btn').click(function(){
    var el = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(el).offset().top}, 1000);
    return false;
  });
  $('.burger').click(function(event) {
    event.preventDefault();
      $(this).toggleClass('active');
      $('header').toggleClass('active');
      $('html,body').toggleClass('hidden');
  });
});


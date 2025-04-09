$(document).ready(function() {
  $('.services_nav_item').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id = $(this).attr('href');
      $(id).fadeIn(300).siblings(0).fadeOut(0);
  });
});

$(".cases_overlay").each(function () {
    var slider = $(this);
    slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="left"></button>',
        nextArrow: '<button type="button" class="right"></button>',
        appendArrows: $('.cases_slider_arrows'),
        rows: 0,
    });
});




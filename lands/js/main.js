$(document).ready(function() {
  $('select').styler();
});
$(".popular_items").each(function () {
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
        appendArrows: $('.popular_item_arrows'),
    });
});

$(document).ready(function() {
  $('.filter_item_head').click(function(event) {
    event.preventDefault();
      $(this).parent().find('.filter_item_overlay').toggle(400);
      $(this).find('img').toggleClass('active');
  });
});


$(document).ready(function() {
  $('.mob_filters').click(function(event) {
    event.preventDefault();
      $('.catalog_filters').show(400);
  });
});

$(document).ready(function() {
  $('.filters_close').click(function(event) {
    event.preventDefault();
      $('.catalog_filters').hide(400);
  });
});

$(document).ready(function() {
  $('.btn-js-sell').click(function(event) {
    event.preventDefault();
      $('.modal').show(400);
  });
});


$(document).ready(function() {
  $('.modal_close').click(function(event) {
    event.preventDefault();
      $('.modal').hide(400);
  });
});
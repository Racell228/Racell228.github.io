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


$(document).ready(function() {
  var nonLinearSlider = document.getElementById('nonlinear');

  noUiSlider.create(nonLinearSlider, {
      connect: true,
      behaviour: 'tap',
      start: [0, 15000000],
      range: {
          // Starting at 500, step the value by 500,
          // until 4000 is reached. From there, step by 1000.
          'min': [0],
          '10%': [3000, 3000],
          '30%': [40000, 40000],
          '70%': [1000000, 1000000],
          'max': [15000000]
      },
      format: wNumb({
          decimals: 0,
          thousand: ' ',
          prefix: '$'
      })
  });

   var nodes = [
      document.getElementById('lower-value'),
      document.getElementById('upper-value') 
  ];

  nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
      nodes[handle].innerHTML = values[handle];
  });

});

$(document).ready(function() {
  $('.faq_item').click(function(event) {
    event.preventDefault();
      $(this).toggleClass('active');
      $(this).find('.faq_item_answer').toggle(400);
  });
});



$(document).ready(function(){
  $('.single_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    margin: 10,
    dots: true,
    arrows:false,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="left slider_arrow"></button>',
    nextArrow: '<button type="button" class="right slider_arrow"></button>',
  });
});
$(document).ready(function(){
  $('.portfolio_slider').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
    dots: true,
    margin: 12,
    responsive: [
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });
});


$(document).ready(function() {
  $('.about_person_nav_link').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(300).siblings(0).fadeOut(0);
  });
});




$(document).ready(function() {
    var nonLinearSlider = document.getElementById('slider-non-linear');
    noUiSlider.create(nonLinearSlider, {
        start: [1],
        step: 1,
        range: {
            'min': [1],
            'max': [20]
        },
        format: wNumb({
        decimals: 0,
        thousand: '.',
        suffix: ' '
    })
    });
var nonLinearSliderValueElement = document.getElementById('slider-non-linear-value');

// Show the value for the *last* moved handle.
nonLinearSlider.noUiSlider.on('update', function (values, handle) {
    nonLinearSliderValueElement.innerHTML = values[handle];
});
});

$(document).ready(function() {
  $('select').styler();
});

$(document).ready(function(){
  $('.reviews_slider').slick({
    slidesToShow:2,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
    dots: true,
    margin: 12,
    responsive: [
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });
});


$(document).ready(function() {
  $('.question_item').click(function(event) {
    event.preventDefault();
      $(this).toggleClass('active');
      $(this).find('.question_item_answer').toggle(400);
  });
});
$(document).ready(function() {
  $('.question_nav_link').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(300).siblings(0).fadeOut(0);
  });
});

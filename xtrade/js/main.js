const employees = document.querySelector("#employees")
noUiSlider.create(employees, {
  start: 400,
  connect: [true, false],

  tooltips: {
    to: function(value) {
        return "€" + Math.trunc(value)
    }
  },
  range: {
    'min': 250,
    '50%': 700,
    'max': 1500
  },
  
  pips: {
    mode: 'steps',
    filter: function (value, type) {
      return type === 0 ? -1 : 1;
    },
    format: {
      to: function (value) {
        return  "€" + value ;
      }
    }
  }
});
     var calc_result = document.getElementById('calc_result');
     employees.noUiSlider.on('update', function (values, handle) {
     calc_result.innerHTML = "€" + Math.trunc(values[handle] * 3.5) ;
     
 });



//Плавный скрол по секциям
$(document).ready(function() {
  $('.scroll').click(function(){
    var el = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(el).offset().top - 100} , 1000);
    return false;
  });
});


$('.review_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="left"></button>',
  nextArrow: '<button type="button" class="right"></button>',
});


$(document).ready(function() {
  $('.faq_item').click(function(){
    $(this).find('.faq_answer').toggle(400);
    $(this).toggleClass('active');
  });
});


$(document).mouseleave(function(e){
    if (e.clientY < 10) {
    $('.popup').show();
    }    
});

$(document).ready(function() {
  $('.close').click(function(){
    $('.modal_form').hide();
    $('.popup').remove();
  });
});


$(document).ready(function(){
  $('.hero_slider').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
    dots: true,
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
$(document).ready(function(){
  $('.product_slider').slick({
    slidesToShow:4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
    dots: false,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,

      }
    }
  ]
  });
});

$(document).ready(function() {
  $('select').styler();
});


$( document ).ready(function() { 
    var stepsSlider = document.getElementById('steps-slider');
    var input0 = document.getElementById('input-with-keypress-0');
    var input1 = document.getElementById('input-with-keypress-1');
    var inputs = [input0, input1];
    noUiSlider.create(stepsSlider, {
        start: [0, 200],
        connect: true,
        tooltips: [true, wNumb({decimals: 1})],
        range: {
            'min': [0],
            'max': 200
        }
    });
    stepsSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle];
    });
    inputs.forEach(function (input, handle) {
      input.addEventListener('change', function () {
          stepsSlider.noUiSlider.setHandle(handle, this.value);
      });
      input.addEventListener('keydown', function (e) {
          var values = stepsSlider.noUiSlider.get();
          var value = Number(values[handle]);
          var steps = stepsSlider.noUiSlider.steps();
          var step = steps[handle];
          var position;
          switch (e.which) {
              case 13:
                  stepsSlider.noUiSlider.setHandle(handle, this.value);
                  break;
              case 38:
                  position = step[1];
                  if (position === false) {
                      position = 1;
                  }
                  if (position !== null) {
                      stepsSlider.noUiSlider.setHandle(handle, value + position);
                  }
                  break;
              case 40:
                  position = step[0];
                  if (position === false) {
                      position = 1;
                  }
                  if (position !== null) {
                      stepsSlider.noUiSlider.setHandle(handle, value - position);
                  }
                  break;
          }
      });
  });

});

$(document).ready(function() {
  $('.list_overlay_filter_item_title').click(function(event) {
      $(this).parent().find('.filter_item_overlay').toggle(400);
      $(this).toggleClass('active');
  });
});


$(function() {

  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");
    var $quantityNum = $(".quantity-num");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();

});

$('body').on('click', '#password_show', function(){
  if ($(this).is(':checked')){
    $('#password').attr('type', 'text');
  } else {
    $('#password').attr('type', 'password');
  }
}); 
$(document).ready(function() {
  $('.modal_close').click(function(event) {
      $('.modal').hide(400);
  });
});

$(document).ready(function() {
  $('.head_profile').click(function(event) {
      $('.modal_signin').show(400);
  });
});

$(function() {
  var owl = $(".single_slider .owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    dots: true,
    nav: true,
  });
});
jQuery(document).ready(function($) {
  let outs = document.querySelectorAll('.single_slider');
  for (let out of outs) {
      let owl = out.querySelector('.owl-carousel');
      let btns = out.querySelectorAll(':scope .single_slider_nav_item_overlay');
      let owlJq = $(owl);
      owlJq.owlCarousel({
          items: 1,
          loop: false,
          margin: 10,
          nav: false,
          dots: false,
      });
      for (let btn of btns) {
          btn.addEventListener('click', function () {
              owlJq.trigger('to.owl.carousel', [$(this).index()]);
              $('.single_slider_nav_item_overlay').removeClass('active')
              $(this).addClass('active');
          })
      }
  };
});
$(document).ready(function() {
  $('.single_characteristic_show_more').click(function(event) {
      event.preventDefault();
      $('.single_characteristic_hide').show(400);
  });
});


$(document).ready(function() {
  $('.single_tabs_item:first-child').show();
  $('.single_tabs_nav_item').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active').siblings().removeClass('active');
      var id = $(this).attr('href');
      $(id).fadeIn(0).siblings().fadeOut(0);
  });
});
$(document).ready(function() {
  $('.single_actions_fastbuy').click(function(event) {
      event.preventDefault();
      $('.modal_fastbuy').show(400);
  });
});
$(window).scroll(function() {
var height = $(window).scrollTop();
if(height > 330){
  $('.busket_registration').addClass('busket_registration_fixed');
} else{
  $('.busket_registration').removeClass('busket_registration_fixed');
}
});
$(window).scroll(function() {
var height = $(window).scrollTop();
var top = $('.busket_overlay').height();
if(height > top){
  $('.busket_registration').addClass('busket_registration_absolute');
} else{
  $('.busket_registration').removeClass('busket_registration_absolute');
}
});


$('input[name="busket_contact_item1"]').click(function(){
  var target = $('#' + $(this).val());
  $('.busket_contact_item_hide').hide(0);
  target.fadeIn(500);
});
$(document).ready(function() {
  $('.show_filter').click(function(event) {
      event.preventDefault();
      $('.comparison_filter,.list_overlay_filter').show(400);
  });
});
$(document).ready(function() {
  $('.filter_close').click(function(event) {
      event.preventDefault();
      $('.comparison_filter').hide(400);
  });
});

$(document).ready(function() {
    $(".fancybox").fancybox();
});

$(document).ready(function() {
  $('.busket_item_gift_show').click(function(event) {
    event.preventDefault();
      $(this).hide();
      $('.busket_item_gift').addClass('active');
  });
});

$(document).ready(function() {
  $('.mobile_catalog').click(function(event) {
    event.preventDefault();
      $('.header_nav_catalog').show();
  });
});
$(document).ready(function() {
  $('.header_nav_close').click(function(event) {
    event.preventDefault();
      $('.header_nav_catalog').hide();
  });
});
$(document).ready(function() {
  $('.list_overlay_filter_close').click(function(event) {
    event.preventDefault();
      $('.list_overlay_filter').hide();
  });
});


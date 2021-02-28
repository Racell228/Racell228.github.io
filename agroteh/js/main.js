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

$(document).ready(function() {
  var input = document.getElementById('password');
  // inputType = input.getAttribute('type');
  $('.modal_password_show').click(function(event) {
      input.setAttribute("type", "text");
  });
});


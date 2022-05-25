//Бегущие Цифры 
$(document).ready(function() {
  var time = 4,
  cc = 1;
$(window).scroll(function() {
  $('#counter').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 800) {
      if (cc < 2) {
        $(".hero_options_item_value").addClass("viz");
        $('.hero_options_item_value').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 500 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});
});


//Вопрос-Ответ
$(document).ready(function() {
  $('.faq_item').click(function(event) {
    event.preventDefault();
      $(this).toggleClass('active');
      $(this).find('.faq_item_answer').toggle(400);
  });
});


$(document).ready(function() {
  $('.header_burger').click(function(event) {
    event.preventDefault();
      $('.header_nav').show(400);
      $('.header_nav_head').show(400);
  });
});

$(document).ready(function() {
  $('.header_nav_item.parent').click(function(event) {
    event.preventDefault();
      $(this).parent().find('.header_nav_child').toggle();
      $(this).toggleClass('active');
  });
});
$(document).ready(function() {
  $('.header_nav_close').click(function(event) {
    event.preventDefault();
      $('.header_nav').hide(400);
      $('.header_nav_head').hide(400);
  });
});


$(document).ready(function ani() {
  
});



// function funcBefore(){
//   setTimeout($('.steps_item:first-child .steps_item_icon').addClass('active'), 1000);
//   setTimeout($('.steps_item:nth-child(2) .steps_item_icon').addClass('active'), 2000);
//   setTimeout($('.steps_item:nth-child(3) .steps_item_icon').addClass('active'), 3000);
//   setTimeout($('.steps_item:nth-child(4) .steps_item_icon').addClass('active'), 4000);
//   setTimeout($('.steps_item .steps_item_icon').removeClass('active'), 5000);
// }

// count = 0;

// intervalId = setInterval(function(){
//  count++;
//  if(count == 100000){
//    clearInterval(intervalId);
//  }
//  funcBefore();
// }, 1000);




setInterval(function() {
  function item1() {
    $('.steps_item:first-child .steps_item_icon').addClass('active');
  }
  function item2() {
    $('.steps_item:nth-child(2) .steps_item_icon').addClass('active');
  }
  function item3() {
    $('.steps_item:nth-child(3) .steps_item_icon').addClass('active');
  }
  function item4() {
    $('.steps_item:nth-child(4) .steps_item_icon').addClass('active');
  }
  function clear() {
    $('.steps_item .steps_item_icon').removeClass('active');
  }
  setTimeout(item1, 1000);
  setTimeout(item2, 2000);
  setTimeout(item3, 3000);
  setTimeout(item4, 4000);
  setTimeout(clear, 5000);
}, 5000);
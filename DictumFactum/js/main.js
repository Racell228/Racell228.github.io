//Вопрос-Ответ
$(document).ready(function() {
  $('.faq_item').click(function(event) {
    event.preventDefault();
      $(this).toggleClass('active');
      $(this).find('.faq_item_answer').toggle(400);
  });
});
$(document).ready(function() {
  $('select').styler();
});



//Work item 
$(window).scroll(function() { 
    var the_top = $(document).scrollTop();
    cPos = $('.guarantees').offset().top;
    if (the_top > cPos) {
        all();
    }
    else {}
});
function all() {
  function item1() {
    $('.work_item:first-child').show(200);
  }
  function item2() {
    $('.work_item:nth-child(2)').show(200);
  }
  function item3() {
    $('.work_item:nth-child(3)').show(200);
  }
  function item4() {
    $('.work_item:nth-child(4)').show(200);
  }
  function item5() {
    $('.work_item:nth-child(5)').show(200);
  }
  function item6() {
    $('.work_item:nth-child(6)').show(200);
  }
  function item7() {
    $('.work_item:nth-child(7)').show(200);
  }
  function item8() {
    $('.work_item:nth-child(8)').show(200);
  }
  function item9() {
    $('.work_item:nth-child(9)').show(200);
  }
  function item10() {
    $('.work_item:nth-child(10)').show(200);
  }
  function item11() {
    $('.work_item:nth-child(11)').show(200);
  }
  function item12() {
    $('.work_rules').addClass('active');
  }
  setTimeout(item1, 500);
  setTimeout(item2, 1000);
  setTimeout(item3, 1500);
  setTimeout(item4, 2000);
  setTimeout(item5, 2500);
  setTimeout(item6, 3000);
  setTimeout(item7, 3500);
  setTimeout(item8, 4000);
  setTimeout(item9, 4500);
  setTimeout(item10, 5000);
  setTimeout(item11, 5500);
  setTimeout(item12, 6000);

};


// $(window).scroll(function() { 
//     var the_top = $(document).scrollTop();
//     cPos = $('.work_overlay').offset().top;
//     if (the_top > cPos) {
//         $('.work_item').show(200);
//         $('.work_rules').addClass('active');
//     }
//     else {}
// });
$(window).scroll(function() {
  $('.facts_item').each(function(){
    var ElPosition = $(this).offset().top;
     var WindowPosition = $(window).scrollTop() + 600;
     if (ElPosition < WindowPosition) {
       $(this).addClass("show");
     }
     else {}
  });
});



//Анимации
$(window).scroll(function() {
  $('.up').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+600) {
       $(this).addClass("fadeInUp");
     }
     else {}
  });
});
$(window).scroll(function() {
  $('.down').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+600) {
       $(this).addClass("fadeInDown");
     }
     else {}
  });
});
$(window).scroll(function() {
  $('.anleft').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+600) {
       $(this).addClass("fadeInLeft");
     }
     else {}
  });
});
$(window).scroll(function() {
  $('.anright').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+600) {
       $(this).addClass("fadeInRight");
     }
     else {}
  });
});


//Бегущие Цифры 
$(document).ready(function() {
  var time = 2,
  cc = 1;
$(window).scroll(function() {
  $('#counter').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 900) {
      if (cc < 2) {
        $(".about_content_item_value span").addClass("viz");
        $('.about_content_item_value span').each(function() {
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





//Меню
$(document).ready(function() {
  $('.burger').click(function(event) {
    event.preventDefault();
      $('.menu').show(1000);
      $('body, html').addClass('hidden');
      $('.overlay').addClass('active');
  });
});
$(document).ready(function() {
  $('.menu_close').click(function(event) {
    event.preventDefault();
      $('.menu').hide(1000);  
      $('.overlay').removeClass('active');
      $('body, html').removeClass('hidden');
  });
});




//Плавный скрол по секциям
$(document).ready(function() {
  $('.menu_link,.hero_bottom_scroll,.hero_bottom_off,.off_btn,.hero_btn').click(function(){
    $('.menu').hide(400);
    var el = $(this).attr('href');
    $('.overlay').removeClass('active');
    $('body, html').removeClass('hidden');
    $('html,body').animate({
      scrollTop: $(el).offset().top}, 1000);
    return false;
  });
});

//Переключение навыков(О нас)
$(document).ready(function() {
  $('.quiz_item_actions_item').click(function(event) {
    event.preventDefault();
      var id1 = $(this).attr('href');
      $(id1).fadeIn(0).siblings(0).fadeOut(0);
  });
});




//Слайдер
$('.facts_overlay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: true,
    centerMode: true,
    responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 992,
       settings: 'unslick'
    }
  ]
    
  });







$(document).ready(function() {
  $('.develop_item_head_list_mobile').click(function(event) {
    event.preventDefault();
      $(this).find('.develop_item_head_list_item').toggle(400);
  });
});

$(document).ready(function() {
  $('.work_item_mobile').click(function(event) {
    event.preventDefault();
      $(this).addClass('active');
      $('.work_overlay').addClass('active');
      $('.work_item').show(0);
      $('.work_rules').addClass('active');
  });
}); 


$(document).ready(function() {
  $('.faq_btn_mobile').click(function(event) {
    event.preventDefault();
      $('.faq_wrapper.last').show(400);
      $(this).hide();
  });
});



$(document).ready(function() {
  $('.work_rules').click(function(event) {
    event.preventDefault();
      $('.rules').show(400);
      $('body,html').addClass('hidden');
  });
});


$(document).ready(function() {
  $('.menu_close').click(function(event) {
    event.preventDefault();
      $('.rules').hide(400);
      $('body,html').removeClass('hidden');
  });
});





if (window.matchMedia("(max-width: 480px)").matches) {
    $(document).ready(function() {
      $('.develop_item_head').removeClass('anleft');
      $('.develop_item_head').addClass('up');


      $('.cases_title,.cases_text').removeClass('down');
      $('.cases_title,.cases_text').addClass('up');

      $('.cases_item').removeClass('anleft');
      $('.cases_item').removeClass('anright');
      $('.cases_item').addClass('up');
    });
    
    $(document).ready(function() {
      $('.develop_item_bot_item').click(function(event) {
        event.preventDefault();
          $(this).find('.develop_item_bot_list').toggle(400);
      });
    });

    $(document).ready(function() {
      $('.develop_item_mid').click(function(event) {
        event.preventDefault();
          $(this).find('.develop_item_mid_overlay').toggle(400);
      });
    });
} else {
  
}
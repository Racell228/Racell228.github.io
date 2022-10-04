


$(window).scroll(function() {
  $('.wait_video').each(function(){
    var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+600) {
      const wrapperVideo = document.getElementById('video');
       wrapperVideo.play();
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

$(document).ready(function() {
  all();
});
function all() {
  function item1() {
    $('.hero_anim_text:first-child').addClass('active');
  }
  function item2() {
    $('.hero_anim_text:nth-child(2)').addClass('active');
  }
  function item3() {
    $('.hero_anim_text:nth-child(3)').addClass('active');
  }
  function item4() {
    $('.hero_anim_text:nth-child(4)').addClass('active');
  }
  function item5() {
    $('.hero_anim_text:nth-child(5)').addClass('active');
  }
  function item6() {
    $('.hero_anim_image').addClass('active');
    $('.hero_anim_bg').addClass('active');
  }
  setTimeout(item6, 0);
  setTimeout(item1, 1000);
  setTimeout(item2, 2000);
  setTimeout(item3, 3000);
  setTimeout(item4, 4000);
  setTimeout(item5, 5000);
};



//Work item 
$(window).scroll(function() { 
    var the_top = $(document).scrollTop();
    cPos = $('.steps').offset().top;
    if (the_top > cPos) {
        steps();
    }
    else {}
});
function steps() {
  function item1() {
    $('.steps_item:first-child').addClass('active');
  }
  function item2() {
    $('.steps_item:nth-child(2)').addClass('active');
  }
  function item3() {
    $('.steps_item:nth-child(3)').addClass('active');
  }
  function item4() {
    $('.steps_item:nth-child(4)').addClass('active');
  }

  
  setTimeout(item1, 250);
  setTimeout(item2, 500);
  setTimeout(item3, 750);
  setTimeout(item4, 1000);
};
$(document).ready(function() {
  $('.extra_content_trigger').click(function(event) {
    event.preventDefault();
      $(this).toggleClass('active');
      $('.extra_content_hide').toggle(400);
  });
});
$(document).ready(function() {
  $('.api_code_cat_item').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $('.api_code_nav').removeClass('active');
      $(id1).addClass('active');
  });
});
$(document).ready(function() {
  $('.api_code_nav_item').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(300).siblings(0).fadeOut(0);
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


//Слайдер отзывы
$(document).ready(function(){
  $('.about_help_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
    dots: true,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        arrows: false,
      }
    }
  ]
  });
});


$(document).ready(function() {
  $('select').styler();
});



$(document).ready(function() {
  $('.close').click(function(event) {
    event.preventDefault();
      $('.pricing_modal').hide();
      $('.teritory').removeClass('active')
  });
});

$(document).ready(function() {
  $('.teritory').click(function(event) {
    event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('name');
      $(id1).fadeIn(300).siblings(0).fadeOut(0);
  });
});

$(document).ready(function() {
  $('.burger').click(function(event) {
    event.preventDefault();
      $('.menu').show(400);
  });
});
$(document).ready(function() {
  $('.menu_close').click(function(event) {
    event.preventDefault();
      $('.menu').hide(400);
  });
});

$(document).ready(function() {
  $('.hiring_vacancies_item').click(function(event) {
    event.preventDefault();
      $('.hiring_modal').show(400);
  });
});
$(document).ready(function() {
  $('.hiring_modal_close').click(function(event) {
    event.preventDefault();
      $('.hiring_modal').hide(400);
  });
});

if (window.matchMedia("(max-width: 481px)").matches) {
$(document).ready(function(){
    $('.pricing_overlay').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      centerMode: true,
      prevArrow: '<button type="button" class="slick_left slick_btn"></button>',
      nextArrow: '<button type="button" class="slick_right slick_btn"></button>'
    });
});

} else {}



$(document).ready(function(){   
    var $element = $('#advantages');
    
$(window).scroll(function() {
  var scroll = $(window).scrollTop() + $(window).height();
  var offset = $element.offset().top
  if (scroll > (offset + 330) ) {
    $('.advantages_title').addClass('fixed');
  }
  else {
    $('.advantages_title').removeClass('fixed');
  }
});
});

$(document).ready(function(){   
    var $element = $('#interface');
    
$(window).scroll(function() {
  var scroll = $(window).scrollTop() + $(window).height();
  var offset = $element.offset().top
  if (scroll > (offset + 220)) {
    $('.advantages_title').addClass('absolute');
    $('.advantages_title').removeClass('fixed');
  }
  else {
    $('.advantages_title').removeClass('absolute');

  }
});
});





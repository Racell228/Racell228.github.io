$(document).ready(function() {
  $('select').styler();
});
$(document).ready(function(){
  $('.subheader_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows:true,
    prevArrow: '<button type="button" class="left slider_arrow"></button>',
    nextArrow: '<button type="button" class="right slider_arrow"></button>',
    autoplay:true,
    autoplaySpeed: 10000,
  });
});
$(document).ready(function() {
  $('.signin:first-child').show();
  $('.signin_head_nav_item').click(function(event) {
      $(this).addClass('www').siblings().removeClass('www');
      var id = $(this).attr('href');
      $(id).fadeIn(0).siblings(0).fadeOut(0);
  });
});
$(document).ready(function() {
  $('.personal_items:first-child').show();
  $('.personal_head_links').click(function(event) {
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(0).siblings(0).fadeOut(0);
  });
});
$(document).ready(function() {
  $('.products_overlay_tab:first-child').show();
  $('.products_nav_links_item').click(function(event) {
      $(this).addClass('active').siblings().removeClass('active');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(0).siblings(0).fadeOut(0);
  });
});



$(document).ready(function() {
  $('.category_body_filters_item_name').click(function(event) {
      $(this).parent().find('.category_body_filters_item_inputs').toggle(400);
      $(this).toggleClass('rotate_arrow');
  });
});
$(".checkbox").change(function() {
    if($(this).prop('checked')) {
        $(this).parent().find('.category_body_subfilters_item_inputs').show(400);
    } else {
        $(this).parent().find('.category_body_subfilters_item_inputs').hide(400);
    }
});

$(function() {

  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus1");
    var $quantityArrowPlus = $(".quantity-arrow-plus1");
    var $quantityNum = $(".quantity-num1");

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
$(function() {

  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus2");
    var $quantityArrowPlus = $(".quantity-arrow-plus2");
    var $quantityNum = $(".quantity-num2");

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
  $('.products_item_fast_buy').click(function(event) {
      event.preventDefault();
      $('.fastbuy').show(400);
      $('html,body').addClass('hidden');
  });
});  
$(document).ready(function() {
  $('.modal_close').click(function(event) {
      event.preventDefault();
     $('.fastbuy,.politic').hide(400);
    $('html,body').removeClass('hidden');
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
      let btns = out.querySelectorAll(':scope .single_slider_nav_btn');
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
              $('.single_slider_nav_btn').removeClass('active')
              $(this).addClass('active');
          })
      }
  };

});

$(document).ready(function() {
  $('.politic-js').click(function(event) {
      event.preventDefault();
      $('.politic').show(400);
      $('html,body').addClass('hidden');
  });
});  

jQuery(function($){
   $(".tel").mask("+380 (99) 999 - 99 - 99");
});

$(document).ready(function() {
  $('.sorting_mobile-js').click(function(event) {
      event.preventDefault();
      $('.category_body_products_head').show(400);
      $('html,body').addClass('hidden');
  });
});  

$(document).ready(function() {
  $('.filters_mobile-js').click(function(event) {
      event.preventDefault();
      $('.category_body_filters').show(400);
      $('html,body').addClass('hidden');
  });
});
$(document).ready(function() {
  $('.filter_close').click(function(event) {
      event.preventDefault();
      $('.category_body_filters,.category_body_products_head').hide(400);
      $('html,body').removeClass('hidden');
  });
}); 

if (window.matchMedia("(max-width: 768px)").matches) {
     $(document).ready(function() {
    $('.header_catalog').click(function(event) {
        event.preventDefault();
        $('.mobile_menu_step0').show(400);
        $('html,body').addClass('hidden');
    });
  }); 

    $(document).ready(function() {
    $('.mobile_menu_category').click(function(event) {
        event.preventDefault();
        $('.mobile_menu_step1').show(400);
        $('html,body').addClass('hidden');
        $('.mobile_menu_step0').hide(400);
    });
  });  
    $(document).ready(function() {
    $('.mobile_menu_category_link2').click(function(event) {
        event.preventDefault();
        $('.mobile_menu_step2').show(400);
        $('html,body').addClass('hidden');
        $('.mobile_menu_step1').hide(400);
    });
  });  
    $(document).ready(function() {
    $('.mobile_menu_category_link3').click(function(event) {
        event.preventDefault();
        $('.mobile_menu_step3').show(400);
        $('html,body').addClass('hidden');
        $('.mobile_menu_step1').hide(400);
        $('.mobile_menu_step2').hide(400);
    });
  });  
    $(document).ready(function() {
    $('.mobile_menu_step_back0').click(function(event) {
        event.preventDefault();
        $('.mobile_menu_step0').show(400);
        $('html,body').addClass('hidden');
        $('.mobile_menu_step3').hide(400);
        $('.mobile_menu_step2').hide(400);
        $('.mobile_menu_step1').hide(400);
    });
  }); 
    $(document).ready(function() {
    $('.mobile_menu_step_back2').click(function(event) {
        event.preventDefault();
        $('.mobile_menu_step2').show(400);
        $('html,body').addClass('hidden');
        $('.mobile_menu_step1').hide(400);
        $('.mobile_menu_step3').hide(400);
        $('.mobile_menu_step0').hide(400);
    });
  }); 
    $(document).ready(function() {
    $('.mobile_menu_step_back1').click(function(event) {
        event.preventDefault();
        $('.mobile_menu_step1').show(400);
        $('html,body').addClass('hidden');
        $('.mobile_menu_step3').hide(400);
        $('.mobile_menu_step2').hide(400);
        $('.mobile_menu_step0').hide(400);
    });
  }); 
    $(document).ready(function() {
    $('.mobile_menu_close').click(function(event) {
        event.preventDefault();
        $('.mobile_menu_step1,.mobile_menu_step2,.mobile_menu_step3,.mobile_menu_step0').hide(400);
        $('html,body').removeClass('hidden');
    });
  });  
}
$(document).ready(function() {
    $('.index_banner_btn,.arrow_next').click(function(event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: 700 },"slow");
    });
  });

$(window).scroll(function() {
var height = $(window).scrollTop();
if(height > 200){
$('.single_right').addClass('single_fixed');
} else{
  $('.single_right').removeClass('single_fixed');
}
});

$(window).scroll(function() {
var height = $(window).scrollTop();
var top = $('.single_overlay').height();
if(height > top - 400){
  $('.single_right').addClass('single_absolute');
} else{
  $('.single_right').removeClass('single_absolute');
}
});


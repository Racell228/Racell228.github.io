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
    // autoplay:true,
    // autoplaySpeed: 10000,
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
  $('.products_item_fast_buy').click(function(event) {
      event.preventDefault();
      $('.fastbuy').show(400);
      $('html,body').addClass('hidden');
  });
});  
$(document).ready(function() {
  $('.modal_close').click(function(event) {
      event.preventDefault();
     $('.fastbuy').hide(400);
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
      let btns = out.querySelectorAll(':scope .card_slider_nav_btn');
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
              $('.card_slider_nav_btn').removeClass('active')
              $(this).addClass('active');
          })
      }
  };

});
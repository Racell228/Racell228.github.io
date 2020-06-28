
$(function() {
  var owl = $(".home_slider .owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    dots: true,
    nav: true,
    responsive:{
        0:{
            nav: false,
        },
        451:{
            nav: true,
        }
    }
  });
});
$(function() {
  var owl = $(".product_slider .owl-carousel");
  owl.owlCarousel({
    items: 5,
    margin: 10,
    dots: false,
    nav: true,
    responsive:{
        0:{
            items:1,
            nav: false,
            center:true,
            loop:false,
            margin:0,
        },
        451:{
            items:2
        },
        769:{
            items:4
        },
         993:{
            items:5
        },
    }
  });
});

$(function() {
  var owl = $(".news_slider .owl-carousel");
  owl.owlCarousel({
    items: 4,
    margin: 10,
    dots: false,
    nav: true,
    responsive:{
        0:{
            items:1,
            nav: false,
        },
        451:{
            items:1
        },
        769:{
            items:3
        },
         993:{
            items:4
        },
    }
  });
});
$(function() {
  var owl = $(".card_descr_slider .owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    dots: true,
  });
});
$(document).ready(function() {
  $('.categories__sliders_item:first-child').show();
  $('.product_nav-link').click(function(event) {
      event.preventDefault();
      $(this).addClass('product_nav_link-active').siblings().removeClass('product_nav_link-active');
      var id = $(this).attr('href');
      $(id).fadeIn(0).siblings(0).fadeOut(0);
  });
});
$(document).ready(function() {
  $('.link_more').click(function(event) {
      event.preventDefault();
      $(this).parent().find('.hidden_text').toggle(400);
      $(this).hide();
  });
});

$(document).ready(function() {
  $('.subheader_right_open').click(function(event) {
      event.preventDefault();
      $('.subheader_right').addClass('subheader_right_show');
      $(this).addClass('subheader_right_open-active');
  });
});

jQuery(function($){
  $(document).mouseup(function (e){
    var div = $(".subheader_right_show"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
      div.removeClass('subheader_right_show');
    };
    $('.subheader_right_open').removeClass('subheader_right_open-active');
  });
});
$(document).ready(function() {
  $('.mobile_menu').click(function(event) {
      event.preventDefault();
      $('.menu').addClass('menu_active');
      $('html,body').addClass('body_overflow');
      $('.body_overlay').show();
  });
});
jQuery(function($){
  $(document).mouseup(function (e){
    var div = $(".menu"); 
    var close = $('.mobile_menu_title');
    if (!div.is(e.target)  && div.has(e.target).length === 0 || close.is(e.target))  { 
      div.removeClass('menu_active');
      $('html,body').removeClass('body_overflow');
      $('.body_overlay').hide();
    }
  });
});
$(document).ready(function() {
  $('.menu__parent').click(function(event) {
      event.preventDefault();
      $(this).find('.menu__child').toggle(500);
  });
});

$(document).ready(function() {
  $('.choice__more_link').click(function(event) {
      event.preventDefault();
      $(this).parent().find('.choice__items').addClass('choice__items_show');
      $(this).hide();
  });
});
$(document).ready(function() {
  $('.mobile_burger').click(function(event) {
      event.preventDefault();
      $('.show_menu_mobile').show(400);
      $('html,body').addClass('body_overflow2');
      $('.body_overlay1').show();
  });
});

jQuery(function($){
  $(document).mouseup(function (e){
    var div = $(".show_menu_mobile"); 
    var close = $('.show_menu_mobile_btn');
    var close1 = $('.show_menu_mobile_img');
    if (!div.is(e.target)  && div.has(e.target).length === 0 || close.is(e.target) || close1.is(e.target))  { 
      div.hide(400);
      $('html,body').removeClass('body_overflow2');
      $('.body_overlay1').hide();
    }
  });
});


$(document).ready(function() {
  $('.header__basket_link').click(function(event) {
      event.preventDefault();
      $(this).addClass('header_basket_full');
      $('.bascket_num').addClass('bascket_num_active');
      $('.basket__modal_full').show();
  });
});
jQuery(function($){
  $(document).mouseup(function (e){
    var div = $(".basket__modal_full"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
      div.hide(); 
    };
    $('.header__basket_link').removeClass('header_basket_full');
    $('.bascket_num').removeClass('bascket_num_active');
  });
});
$(document).ready(function() {
  $('.header__basket_link_empty').click(function(event) {
      event.preventDefault();
      $(this).addClass('header_basket_empty');
      $('.bascket_num').addClass('bascket_num_active');
      $('.basket__modal_empty').show();
  });
});

jQuery(function($){
  $(document).mouseup(function (e){
    var div = $(".basket__modal_empty"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
      div.hide(); 
    };
    $('.header__basket_link_empty').removeClass('header_basket_empty');
    $('.header__basket_link').removeClass('header_basket_empty');
    $('.bascket_num').removeClass('bascket_num_active');
  });
});


$(document).ready(function() {
  $('.show_menu_mobile_cat').click(function(event) {
      event.preventDefault();
      $('.menu').addClass('menu_active');
      $('html,body').addClass('body_overflow');
      $('.body_overlay').show();
      $('html,body').removeClass('body_overflow2');
      $('.body_overlay1').hide();
      $('.show_menu_mobile').hide();
  });
});
$(function() {
  $('select').styler();
});
$(document).ready(function() {
  $('.filter_item_title').click(function(event) {
      event.preventDefault();
      $(this).parent().find('.filter_item_overlay').toggle(500);
      $(this).toggleClass('filter_item_title-active');
  });
});

if(window.matchMedia('(max-width: 768px)').matches){
  $(document).ready(function() {
  $('.catalog_filters_link_filter').click(function(event) {
      event.preventDefault();
      $('.catalog__left').addClass('catalog__left_active');
      $('html,body').addClass('body_overflow3');
      $('.body_overlay3').show();
    });
  });
  jQuery(function($){
  $(document).mouseup(function (e){
    var div = $(".catalog__left"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
      div.removeClass('catalog__left_active'); 
      $('html,body').removeClass('body_overflow3');
      $('.body_overlay3').hide();
    };
   
   });
  });
}
if(window.matchMedia('(max-width: 450px)').matches){
  $(document).ready(function() {
  $('.catalog__right_content_show').click(function(event) {
      event.preventDefault();
      $('.catalog__right_content').removeClass('catalog__right_content');
      $(this).hide();
    });
  });
}
jQuery(document).ready(function($) {
  let outs = document.querySelectorAll('.card_descr_slider');
  for (let out of outs) {
      let owl = out.querySelector('.owl-carousel');
      let btns = out.querySelectorAll(':scope .card_descr_slider_nav_btn');
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
          })
      }
  };

});



$(document).ready(function() {
  $('.show_menu_mobile_cat').click(function(event) {
      event.preventDefault();
      $('.menu').addClass('menu_active');
      $('html,body').addClass('body_overflow');
      $('.body_overlay').show();
      $('html,body').removeClass('body_overflow2');
      $('.body_overlay1').hide();
      $('.show_menu_mobile').hide();
  });
});


$(document).ready(function() {
  $('.card_info-rewievs-head-btn').click(function(event) {
      event.preventDefault();
      $('.modal_card').show();
      $('html,body').addClass('modal_overflow');
  });
});
$(document).ready(function() {
  $('.review-modal_close').click(function(event) {
      event.preventDefault();
      $('.modal_card').hide();
      $('html,body').removeClass('modal_overflow');
  });
});


$(document).ready(function() {
  $('.feedback_head_active-btn').click(function(event) {
      event.preventDefault();
      $('.modal_feedback').show();
      $('html,body').addClass('modal_overflow');
  });
});
$(document).ready(function() {
  $('.review-modal_close').click(function(event) {
      event.preventDefault();
      $('.modal_feedback').hide();
      $('html,body').removeClass('modal_overflow');
  });
});
$(document).ready(function() {
  $('.catalog_filters_link_help,.help__left_btn').click(function(event) {
      event.preventDefault();
      $('.modal_help').show();
      $('html,body').addClass('modal_overflow');
  });
});
$(document).ready(function() {
  $('.review-modal_close').click(function(event) {
      event.preventDefault();
      $('.modal_help').hide();
      $('html,body').removeClass('modal_overflow');
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


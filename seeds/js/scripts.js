
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
      $('.show_menu_mobile').show(500);
      $('html,body').addClass('body_overflow2');
      $('.body_overlay1').show();
  });
});

jQuery(function($){
  $(document).mouseup(function (e){
    var div = $(".show_menu_mobile"); 
    var close = $('.show_menu_mobile_btn');
    if (!div.is(e.target)  && div.has(e.target).length === 0 || close.is(e.target))  { 
      div.hide(500);
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
// $(document).ready(function() {
//   $('.header__basket_link').click(function(event) {
//       event.preventDefault();
//       $(this).addClass('header_basket_empty');
//       $('.bascket_num').addClass('bascket_num_active');
//       $('.basket__modal_empty').show();
//   });
// });

// jQuery(function($){
//   $(document).mouseup(function (e){
//     var div = $(".basket__modal_empty"); 
//     if (!div.is(e.target) 
//         && div.has(e.target).length === 0) { 
//       div.hide(); 
//     };
//     $('.header__basket_link').removeClass('header_basket_empty');
//     $('.bascket_num').removeClass('bascket_num_active');
//   });
// });



$(document).ready(function() {
  $('.filter_item_title').click(function(event) {
      event.preventDefault();
      $(this).parent().find('.filter_item_overlay').toggle(500);
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
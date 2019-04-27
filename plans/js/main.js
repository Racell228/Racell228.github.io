
$(document).ready(function(){
  $('.customer_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: '<button type="button" class="left btn-juliet"><img src="img/arrow_left.png" alt=""></button>',
    nextArrow: '<button type="button" class="right btn-juliet"><img src="img/arrow_right.png" alt=""></button>'
  });
});
$(document).ready(function(){
  $('.delivery_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left btn-juliet"><img src="img/arrow_left.png" alt=""></button>',
    nextArrow: '<button type="button" class="right btn-juliet"><img src="img/arrow_right.png" alt=""></button>'
  });
});

$(document).ready(function() {
  $('.submit_app').click(function(event) {
      event.preventDefault();
      $('.request_popup').toggleClass('window_sign_in_translate').siblings().removeClass('window_sign_in_translate');
      $('.request_popup').removeClass('window_sign_in_static');
       $('html').addClass('hidden');
       $('.overlay').addClass('show');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.request_popup').removeClass('window_sign_in_translate');
      $('.request_popup').addClass('window_sign_in_static');
      $('html').removeClass('hidden');
      $('.overlay').removeClass('show');

  });
});
$(document).mouseup(function (e) { 
  var popup = $('.request_popup');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.request_popup').addClass('window_sign_in_static');
    $('.request_popup').removeClass('window_sign_in_translate');
    $('html').removeClass('hidden');
    $('.overlay').removeClass('show');
  }
});

$(document).ready(function() {
  $('.btn, .button_request, .button_performance').click(function(event) {
      event.preventDefault();
      $('.request_recall').toggleClass('window_sign_in_translate').siblings().removeClass('window_sign_in_translate');
      $('.request_recall').removeClass('window_sign_in_static');
       $('html').addClass('request_recall_hidden');
       $('.overlay1').addClass('show');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.request_recall').removeClass('window_sign_in_translate');
      $('.request_recall').addClass('window_sign_in_static');
      $('html').removeClass('request_recall_hidden');
      $('.overlay1').removeClass('show');

  });
});
$(document).mouseup(function (e) { 
  var popup = $('.request_recall');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.request_recall').addClass('window_sign_in_static');
    $('.request_recall').removeClass('window_sign_in_translate');
    $('html').removeClass('request_recall_hidden');
    $('.overlay1').removeClass('show');
  }
});

function calc() {
  const sum =
    $('[name="test1"]:checked').val() * $('[name="test2"]').val() +
    $('[name="test5"]:checked').get().reduce((acc, n) => acc + +$(n).val(), 0);
  $('#summ').text(sum);
}
$('#form--calc').on('input', calc);
calc();

$(document).ready(function() {
  $('.have_discount').click(function(event) {
      event.preventDefault();
      $('.calculator').toggleClass('window_calculator_translate').siblings().removeClass('window_sign_in_translate');
      $('.calculator').removeClass('window_calculator_static');
       $('html').addClass('calculator_hidden');
       $('.overlay2').addClass('overlay2_show');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.calculator').removeClass('window_calculator_translate');
      $('.calculator').addClass('window_calculator_static');
      $('html').removeClass('calculator_hidden');
      $('.overlay2').removeClass('overlay2_show');

  });
});
$(document).mouseup(function (e) { 
  var popup = $('.calculator');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.calculator').addClass('window_calculator_static');
    $('.calculator').removeClass('window_calculator_translate');
    $('html').removeClass('calculator_hidden');
    $('.overlay2').removeClass('overlay2_show');
  }
});
jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 100) {
        jQuery('#nav').addClass('fixed');
    }
    else {
        jQuery('#nav').removeClass('fixed');
    }
});

$('.scrollto').click(function(){
  var el = $(this).attr('href');
  $('html,body').animate({
    scrollTop: $(el).offset().top - $("header").height()}, 1000);
  return false;
});
$('.scrolltoq').click(function(){
  var el = $(this).attr('href');
  $('html,body').animate({
    scrollTop: $(el).offset().top - $(".qqqqw").height()}, 1000);
  return false;
});

$(document).ready(function() {
  $('.mobile_m').click(function(event) {
      event.preventDefault();
      $('.mobile_menu').toggleClass('window_mobile_translate').siblings().removeClass('window_mobile_translate');
      $('.mobile_menu').removeClass('window_mobile_static');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.mobile_menu').removeClass('window_mobile_translate');
      $('.mobile_menu').addClass('window_mobile_static');
  });
});
if(window.matchMedia('(max-width: 576px)').matches){
  $('.delivery_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left btn-juliet"><img src="img/arrow_left.png" alt=""></button>',
    nextArrow: '<button type="button" class="right btn-juliet"><img src="img/arrow_right.png" alt=""></button>'
  });
}
if(window.matchMedia('(max-width: 576px)').matches){
  $('.customer_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="left btn-juliet"><img src="img/arrow_left.png" alt=""></button>',
    nextArrow: '<button type="button" class="right btn-juliet"><img src="img/arrow_right.png" alt=""></button>'
  });
}
$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
});

var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}
jQuery(function(f){
    var element = f('.up_arrow');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 700 ? 'In': 'Out')](100);           
    });
}); 

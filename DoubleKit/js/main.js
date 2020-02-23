
var imgs = $('.slider img');
imgs.each(function(){
  var item = $(this).closest('.item');
  item.css({
    'background-image': 'url(' + $(this).attr('src') + ')', 
    'background-position': 'center',            
    '-webkit-background-size': 'cover',
    'background-size': 'cover', 
  });
  $(this).hide();
});
$(document).ready(function() {
  $('.tabs__item:first-child').show();
  $('.categories__item').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('categories__item-active').siblings().removeClass('categories__item-active');
      var id = $(this).attr('href');
      $(id).fadeIn(0).siblings().fadeOut(0);
  });
});
// показать Меню
$(".show_menu").click(function() {
  $(".head_menu-body").fadeIn();
  $("body").addClass('hidden');
  $("html").addClass("hidden");
});
// Скрыть меню
$(".head_menu-back").click(function() {
  $(".head_menu-body").fadeOut();
  $("body").removeClass('hidden');
  $("html").removeClass("hidden");
});

$(".questions_item").click(function(){
  // $(this).toggleClass('questions_item-active');
  $(this).children(".questions_arrow").toggleClass('question_arrow-active');
  $(this).children(".questions_answer").toggleClass('questions_answer_active');
  $(this).find(".questions_item-line").toggleClass('questions_item-line_active');
});

$(".blog_title_mobile").click(function(){
  $(".blog_links").toggleClass('blog_links_active');
  $(".blog_title_mobile_arrow").toggleClass('blog_title_mobile_arrow_show');
});


$(".prices_category_title").click(function(){
  $(".prices_category").toggleClass('prices_category_active');
  $(".prices_category_arrow").toggleClass('prices_category_arrow_show');
});



jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 50) {
        $('header').addClass('header_fixed');
        $('.logo_fixed').show();
        $('.head_menu-img').hide();
        $('.head_btn_static').hide();
        $('.head_btn_fixed').show();
    }
    else {
        $('header').removeClass('header_fixed');
        $('.logo_fixed').hide();
        $('.head_menu-img').show();
        $('.head_btn_static').show();
        $('.head_btn_fixed').hide();
    }
});
$(function(f){
    var element = f('.arrow_top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 700 ? 'In': 'Out')](100);           
    });
}); 
$(document).ready(function() {
  $(".arrow_top").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});


jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 700) {
        $('.prices_category_title').addClass('prices_category_title_fixed');
        $('.prices_category').addClass('prices_category_fixed');
    }
    else {
        $('.prices_category_title').removeClass('prices_category_title_fixed');
        $('.prices_category').removeClass('prices_category_fixed');
    }
});


$(".step_item_btn").click(function(){
  $('.step_item_btn').removeClass('step_item_btn_active');
  $(this).addClass('step_item_btn_active');
});


$(".step_item_btn1").click(function(){
  $('.steps_info_item').hide();
  $('.steps_info1').show();
  
});
$(".step_item_btn2").click(function(){
  $('.steps_info_item').hide();
  $('.steps_info2').show();
});
$(".step_item_btn3").click(function(){
  $('.steps_info_item').hide();
  $('.steps_info3').show();
});

$(".step_item_btn4").click(function(){
  $('.steps_info_item').hide();
  $('.steps_info4').show();
});

$(".step_item_btn5").click(function(){
  $('.steps_info_item').hide();
  $('.steps_info5').show();
});


$(".step_item_btn6").click(function(){
  $('.steps_info_item').hide();
  $('.steps_info6').show();
});











































$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  focusOnSelect: true,
  cssEase: 'linear',
  touchMove: true,
  prevArrow:'<button class="slick-prev"></button>',
  nextArrow:'<button class="slick-next"></button>',
  });

$('.head__menu').on('click', function(e) {
  e.preventDefault;
  $('.head__menu_burger').toggleClass('menu__burger_active');
});
$(document).ready(function(){
  $('.foundation__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="left btn-juliet"><img src="img/arrow_right.svg"  class="left__img" alt=""></button>',
    nextArrow: '<button type="button" class="right btn-juliet"><img src="img/arrow_right.svg" class="right__img" alt=""></button>'
  });
});
$(document).ready(function(){
  $('.partner_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
     prevArrow: '<button type="button" class="left btn-juliet"><img src="img/arrow_right.svg" class="left__img" alt=""></button>',
    nextArrow: '<button type="button" class="right btn-juliet"><img src="img/arrow_right.svg"  class="right__img" alt=""></button>'
  });
});
if(window.matchMedia('(min-width: 768px)').matches){
  $('.partner_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="left btn-juliet"><img src="img/arrow_right.svg" class="left__img" alt=""></button>',
    nextArrow: '<button type="button" class="right btn-juliet"><img src="img/arrow_right.svg"  class="right__img" alt=""></button>'
  });
}
$(document).ready(function() {
  $('.head__menu').click(function(event) {
      event.preventDefault();
      $('nav').toggleClass('active').siblings().removeClass('active');
      $('body').toggleClass('body__height').siblings().removeClass('body__height');
  });
});
$(document).ready(function() {
  $('.foot__idea, .foot__idea_m, .head__idea, .nav__idea_href').click(function(event) {
      event.preventDefault();
      $('html').addClass('hidden__offer');
      $('.offer').toggleClass('show').siblings().removeClass('show');
      $('.overlay').addClass('show__overlay');
      $('.offer').removeClass('offer_hidden');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.offer').removeClass('show');
      $('html').removeClass('hidden__offer');
      $('.offer').addClass('offer_hidden');
       $('.overlay').removeClass('show__overlay');
  });
});
$(document).ready(function() {
  $('.offer__button').click(function(event) {
      event.preventDefault();
      $('html').addClass('hidden__offer');
      $('.thank').toggleClass('show').siblings().removeClass('show');
      $('.overlay').addClass('show__overlay');
      $('.thank').removeClass('offer_hidden');
  });
});
$(document).ready(function() {
  $('.close_reg, .thank__button').click(function(event) {
      event.preventDefault();
      $('.thank').removeClass('show');
      $('html').removeClass('hidden__offer');
      $('.thank').addClass('offer_hidden');
       $('.overlay').removeClass('show__overlay');
  });
});
jQuery(document).ready(function() {
  jQuery(".up_arrow a").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});

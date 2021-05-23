$(document).ready(function(){
  $('.slider_overlay').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });
});
$(document).ready(function(){
  $('.single_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow:'<button class="prev"></button>',
  	nextArrow:'<button class="next"></button>',
  	variableWidth: true
  });
});
$(document).ready(function() {
  $('.header_nav_close').click(function(event) {
     $('.header_nav').hide(400);
     $('html,body').removeClass('hidden');
  });
});
$(document).ready(function() {
  $('.header_burger').click(function(event) {
     $('.header_nav').show(400);
     $('html,body').addClass('hidden');
  });
});


if(window.matchMedia('(max-width: 769px)').matches){
  	$(document).ready(function() {
	  	$('.header_parent,.parent').click(function(event) {
	      $(this).find('.parent_links').toggle(200);
	      $(this).find('.parent_links').toggleClass('active');
	  	});
	});
	
}
if(window.matchMedia('(max-width: 481px)').matches){
  	$(document).ready(function() {
	  	$('.header_phone_item').click(function(event) {
	      event.preventDefault();
	      
	  	});
	});
	$(document).ready(function() {
	  	$('.header_phone').click(function(event) {
	      $('.header_phone_mobile').toggle(400);
	       $(this).find('.header_phone_trigger').toggleClass('active');
	  	});
	});
}
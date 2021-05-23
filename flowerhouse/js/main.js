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
  });
});
$(document).ready(function() {
  $('.header_burger').click(function(event) {
     $('.header_nav').show(400);
  });
});

if(window.matchMedia('(max-width: 480px)').matches){
  	$(document).ready(function() {
	  	$('.header_phone_item').click(function(event) {
	      event.preventDefault();
	      
	  	});
	});
}
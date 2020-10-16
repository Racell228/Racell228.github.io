$(document).ready(function() {
  $('.client_faq-item').click(function(event) {
      event.preventDefault();
      $(this).find('.client_faq-item-answer').toggle(400);
      $(this).find('.client_faq-item-title-arrow').toggleClass('faq_rotate');
  });
}); 

$(document).ready(function() {
  $('.categories-items1').click(function(event) {
      event.preventDefault();
      $('.client_categories-items-text-explanation').hide(400);
  	  $('#icon1').show(400);
  	  $(this).addClass('active').siblings().removeClass('active');
  });
});  
$(document).ready(function() {
  $('.categories-items2').click(function(event) {
      event.preventDefault();
      	$('.client_categories-items-text-explanation').hide(400);
  		$('#icon2').show(400);
  		$(this).addClass('active').siblings().removeClass('active');
  });
});  
$(document).ready(function() {
  $('.categories-items3').click(function(event) {
      event.preventDefault();
      	$('.client_categories-items-text-explanation').hide(400);
  		$('#icon3').show(400);
  		$(this).addClass('active').siblings().removeClass('active');
  });
});  
$(document).ready(function() {
  $('.categories-items4').click(function(event) {
      event.preventDefault();
     	$('.client_categories-items-text-explanation').hide(400);
  		$('#icon4').show(400);
  		$(this).addClass('active').siblings().removeClass('active');
  });
});  
$(document).ready(function() {
  $('.categories-items5').click(function(event) {
      event.preventDefault();
      	$('.client_categories-items-text-explanation').hide(400);
  		$('#icon5').show(400);
  		$(this).addClass('active').siblings().removeClass('active');
  });
});  
$(document).ready(function() {
  $('.categories-items6').click(function(event) {
      event.preventDefault();
      	$('.client_categories-items-text-explanation').hide(400);
  		$('#icon6').show(400);
  		$(this).addClass('active').siblings().removeClass('active');
  });
});  
$(document).ready(function() {
  $('.categories-items7').click(function(event) {
      event.preventDefault();
     	$('.client_categories-items-text-explanation').hide(400);
  		$('#icon7').show(400);
  		$(this).addClass('active').siblings().removeClass('active');
  });
});  
$(document).ready(function() {
  $('.categories-items8').click(function(event) {
      event.preventDefault();
      	$('.client_categories-items-text-explanation').hide(400);
  		$('#icon8').show(400);
  		$(this).addClass('active').siblings().removeClass('active');
  });
});  
$(document).ready(function() {
  $('.categories-items9').click(function(event) {
      event.preventDefault();
      	$('.client_categories-items-text-explanation').hide(400);
  		$('#icon9').show(400);
  		$(this).addClass('active').siblings().removeClass('active');
  });
});  
if (window.matchMedia("(max-width: 480px)").matches) {
    $(document).ready(function(){
    $('.index_review-items').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="left btn-juliet"></button>',
      nextArrow: '<button type="button" class="right btn-juliet"></button>'
    });
});
} else {
  /* the viewport is less than 400 pixels wide */
}

$(document).ready(function() {
  $('.client_faq-item').click(function(event) {
      event.preventDefault();
      $(this).find('.client_faq-item-answer').toggle(400);
      $(this).find('.client_faq-item-title-arrow').toggleClass('faq_rotate');
  });
}); 


// $(document).ready(function() {
//   $('.client_categories-items-text-explanation:first-child').show();
//   $('.categories-items-images-flex-item').click(function(event) {
//       $(this).addClass('active').siblings().removeClass('active');
//       var id = $(this).attr('href');
//       destination = $(id).offset().top;
//       $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
//       $(id).fadeIn(0).siblings(0).fadeOut(0);
//   });
// });


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


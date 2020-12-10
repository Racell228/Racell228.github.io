$(document).ready(function() {
  $('.question_item').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active');
      $(this).find('.question_item_answer').toggle(400);
      $(this).find('.question_item_question_arrow').toggleClass('active');
  });
});
$(document).ready(function(){
  $('.review_slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="left_review slider_arrow"></button>',
    nextArrow: '<button type="button" class="right_rewiew slider_arrow"></button>',
  });
});
$(document).ready(function() {
  $('.risk_content_nav_item1').click(function(event) {
      event.preventDefault();
      	$('.risk_content_text_item').hide(400);
  		$('#risk_content_nav_item1').show(400);
  		$(this).addClass('active').siblings().removeClass('active');
  });
});  
$(document).ready(function() {
  $('.risk_content_nav_item2').click(function(event) {
      event.preventDefault();
      	$('.risk_content_text_item').hide(400);
  		$('#risk_content_nav_item2').show(400);
  		$(this).addClass('active').siblings().removeClass('active');
  });
});  
$(document).ready(function() {
  $('.risk_content_nav_item3').click(function(event) {
      event.preventDefault();
      	$('.risk_content_text_item').hide(400);
  		$('#risk_content_nav_item3').show(400);
  		$(this).addClass('active').siblings().removeClass('active');
  });
});  

$(document).ready(function() {
  $('.economic_table_btn ').click(function(event) {
      event.preventDefault();
  		$('.economic_table_body').toggleClass('active');
  });
}); 
$(document).ready(function() {
  $('.header_burger').click(function(event) {
      event.preventDefault();
      	$(this).toggleClass('active');
      	$('.header_overlay').toggleClass('active');
      	$('html,body').toggleClass('hidden');
  });
});  

if (window.matchMedia("(max-width: 480px)").matches) {
    $(document).ready(function(){
    $('.decision_wrapper').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slider_arrow left"></button>',
      nextArrow: '<button type="button" class="slider_arrow right"></button>'
    });
});

$(document).ready(function(){
	$('.help_overlay').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  autoplaySpeed: 2000,
	  prevArrow: '<button type="button" class="slider_arrow left"></button>',
	  nextArrow: '<button type="button" class="slider_arrow right"></button>'
	});
});
$(document).ready(function(){
	$('.safety_overlay').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  autoplaySpeed: 2000,
	  prevArrow: '<button type="button" class="slider_arrow left"></button>',
	  nextArrow: '<button type="button" class="slider_arrow right"></button>'
	});
});
$(document).ready(function(){
  $('.partners_overlay').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slider_arrow left"></button>',
    nextArrow: '<button type="button" class="slider_arrow right"></button>'
  });
});
$(document).ready(function(){
  $('.economic_table').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slider_arrow left"></button>',
    nextArrow: '<button type="button" class="slider_arrow right"></button>'
  });
});
} else {
  /* the viewport is less than 400 pixels wide */
}

$(document).ready(function() {
  $('.hero_text_btn').click(function(event) {
      event.preventDefault();
        $('.modal').show();
        $('html,body').addClass('hidden');
  });
});
$(document).ready(function() {
  $('.modal_close').click(function(event) {
      event.preventDefault();
        $('.modal').hide();
        $('html,body').removeClass('hidden');
  });
});
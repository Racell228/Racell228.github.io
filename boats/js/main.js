$(document).ready(function(){
	$('.hero_slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	  if(!slick.$dots){
	  	return;
	  }
	  var i = (currentSlide ? currentSlide : 0) + 1;
	   $('.slider_count').text(i + '/' + (slick.$dots[0].children.length));
	});
  $('.hero_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows:true,
    prevArrow: '<button type="button" class="left"></button>',
    nextArrow: '<button type="button" class="right"></button>',
  });
});
$(document).ready(function() {
  $('select').styler();
});


$(document).ready(function() {
  $('.filter_item_title').click(function(event) {
      $(this).toggleClass('active');
      $(this).parent().find('.filter_item_overlay').toggle(400)
  });
});
$(document).ready(function() {
  $('.filter_trigger').click(function(event) {
      $('.filter').toggle(400);
      $('.filter').toggleClass('active');
      $('html,body').toggleClass('hidden');
      $(this).toggleClass('active');
  });
});
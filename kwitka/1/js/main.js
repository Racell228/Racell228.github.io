$(window).scroll(function() {
	var scroll = window.pageYOffset;
	var position = $('.steps_overlay').offset();
	var pos = position.top;
	var sectionheight = $('.steps_overlay').height();
	var height = scroll - $('.hero').height() - $('.discount').height();
	var maxheight = $('.steps_line').height();

	if(scroll > sectionheight  - pos){
		$('.steps_line_trigger').css('height', `${height}`);
	} else{}
	if(height > maxheight){
		$('.steps_line_trigger').css('height', `100%`);
	} else{}
});


$(document).ready(function() {
  $('.faq_item').click(function(event) {
    event.preventDefault();
      $(this).find('.faq_item_answer').toggle(400);
      $(this).find('.faq_item_arrow').toggleClass('show');
  });
});

$(document).ready(function() {
  $('.burger').click(function(event) {
    event.preventDefault();
      $(this).toggleClass('active');
      $('body,html').toggleClass('hidden');
      $('.header_nav').toggleClass('show');
      $('.header_actions').toggleClass('show');
  });
});


//Плавный скрол по секциям
$(document).ready(function() {
  $('.header_nav a,.footer_nav a').click(function(){
    var el = $(this).attr('href');
    $('.header_nav').removeClass('show');
    $('.header_actions').removeClass('show');
    $('html,body').removeClass('hidden');
    $('.burger').removeClass('active');
    $('html,body').animate({
      scrollTop: $(el).offset().top}, 1000);
    return false;
  });
});
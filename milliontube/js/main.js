$(document).ready(function(){
  $('.hero_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false
  });
});
$(document).ready(function() {
  $('.hero_link,.upload_head_link').click(function(event) {
      event.preventDefault();
     $('.upload_show').show(400);
  });
}); 
$(document).ready(function() {
  $('.modal_upload_btn').click(function(event) {
      event.preventDefault();
      	$('.upload_show').hide(400);
    	$('.upload_details').show(400);
  });
}); 
$(document).ready(function() {
  $('.modal_content_footer_btns_next1').click(function(event) {
      event.preventDefault();
      	$('.upload_show').hide(400);
    	$('.upload_details').hide(400);
    	$('.upload_pay').show(400);
  });
}); 
$(document).ready(function() {
  $('.modal_content_footer_btns_next2').click(function(event) {
      event.preventDefault();
      	$('.upload_show').hide(400);
    	$('.upload_details').hide(400);
    	$('.upload_pay').hide(400);
    	$('.upload_done').show(400);
  });
}); 
$(document).ready(function() {
  $('.modal_content_footer_btns_back').click(function(event) {
      event.preventDefault();
      	$('.upload_show').hide(400);
    	$('.upload_details').show(400);
    	$('.upload_pay').hide(400);
    	$('.upload_done').hide(400);
  });
}); 
$(document).ready(function() {
  $('.modal_close,.modal_content_footer_btns_close').click(function(event) {
      event.preventDefault();
      	$('.upload_show').hide(400);
    	$('.upload_details').hide(400);
    	$('.upload_pay').hide(400);
    	$('.upload_done').hide(400);
  });
}); 


$(document).ready(function() {
  $('.faq_item').click(function(event) {
      event.preventDefault();
      	$(this).find('.faq_item_content').toggle(400);
      	$(this).find('.faq_item_title').toggleClass('active');
  });
}); 
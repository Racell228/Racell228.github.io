$(document).ready(function() {
  $('.faq_item_head').click(function(){
    event.preventDefault();
      $(this).parent().find('.faq_item_answer').toggle(400);
      $(this).parent().toggleClass('active');
  });
});
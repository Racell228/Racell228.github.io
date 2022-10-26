 
$(document).ready(function() {
  $('.calendar_item_content_link.active').click(function(event) {
    event.preventDefault();
      $('.calendar_item_content_link').removeClass('current');
      $(this).addClass('current');
      var id1 = $(this).attr('href');
      $(id1).fadeIn(0);
      $('.calendar_result_note').hide(0);
      $('.calendar_result').addClass('absolute');
      $('html,body').addClass('hidden');
  });
  $('.calendar_result_hide').click(function(event) {
    event.preventDefault();
      $('.calendar_item_content_link').removeClass('current');
      $('.calendar_result_overlay').hide();
      $('.calendar_result_note').show(0);
      $('.calendar_result').removeClass('absolute');
      $('html,body').removeClass('hidden');
  });
});
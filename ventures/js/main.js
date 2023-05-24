$(document).ready(function() {
  $('.burger').click(function(event) {
    event.preventDefault();
      $('.header_menu').addClass('active');
  });
  $('.close').click(function(event) {
    event.preventDefault();
      $('.header_menu').removeClass('active');
  });
});
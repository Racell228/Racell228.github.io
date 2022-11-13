$(document).ready(function() {
  $('.burger').click(function(event) {
    $('.header_nav').toggleClass('active');
    $('.burger_icon').toggle(0);
    $('.close_icon').toggle(0);
    $('body,html').toggleClass('hidden');
  });
});

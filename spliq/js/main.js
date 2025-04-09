$(document).ready(function() {
  $('.modal_close').click(function(event) {
    event.preventDefault();
      $('.modal').hide();
  });
});

$(document).ready(function() {
  $('.modal-js').click(function(event) {
    event.preventDefault();
      $('.modal').show();
  });
});
$(document).ready(function() {
  $('.modal_cf_close').click(function(event) {
    event.preventDefault();
      $('.modal_cf').hide();
  });
});

$(document).ready(function() {
  $('.header_lang_current').click(function(event) {
    event.preventDefault();
      $('.header_lang_hide').toggleClass('active');
  });
});
$(document).ready(function() {
  $('.header_burger').click(function(event) {
    event.preventDefault();
      $(this).toggleClass('active');
      $('.header_nav').toggleClass('active');
  });
});
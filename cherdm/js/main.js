$(document).ready(function() {
  $('.header_catalog').click(function(event) {
    event.preventDefault();
      $('.header_nav').toggleClass('active');
      $(this).toggleClass('active');
      $('body,html').toggleClass('hidden');
  });
});

$(document).ready(function() {
  $('.slick-arrow').click(function(event) {
    event.preventDefault();
  });
});
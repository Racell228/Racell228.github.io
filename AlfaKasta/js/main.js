$(document).ready(function() {
  $('.tabs__item:first-child').show();
  $('.categories__item').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active').siblings().removeClass('active');
      var id = $(this).attr('href');
      $(id).fadeIn().siblings().fadeOut();
  });
});
$(document).ready(function() {
  $('.cyber__item:first-child').show();
  $('.cyber_cat__item').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active').siblings().removeClass('active');
      var id = $(this).attr('href');
      $(id).fadeIn().siblings().fadeOut();
  });
});
$(document).ready(function() {
  $('.slide a').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active').siblings().removeClass('active');
  });
});
$(document).ready(function() {
  $('.slide_m a').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active').siblings().removeClass('active');
  });
});

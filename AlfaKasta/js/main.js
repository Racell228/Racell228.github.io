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
$(document).ready(function() {
  $('.burger').click(function(event) {
      event.preventDefault();
      $('.more').toggleClass('more_display').siblings().removeClass('more_display');
  });
});
$(document).ready(function() {
  $('.balance_arrow').click(function(event) {
      event.preventDefault();
      $('.balance_more').toggleClass('balance_more_open').siblings().removeClass('balance_more_open');
  });
});
$(document).ready(function() {
  $('.profile').click(function(event) {
      event.preventDefault();
      $('.profile_more').toggleClass('profile_more_open').siblings().removeClass('.profile_more_open');
  });
});

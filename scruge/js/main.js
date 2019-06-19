$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
});
$(document).ready(function() {
  $('.mobile_m').click(function(event) {
      event.preventDefault();
      $('.mobile_menu').toggleClass('window_mobile_translate').siblings().removeClass('window_mobile_translate');
      $('.mobile_menu').removeClass('window_mobile_static');
  });
});
$(document).ready(function() {
  $('.close_reg').click(function(event) {
      event.preventDefault();
      $('.mobile_menu').removeClass('window_mobile_translate');
      $('.mobile_menu').addClass('window_mobile_static');
  });
});
jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 50) {
        jQuery('header').addClass('fixed');
    }
    else {
        jQuery('header').removeClass('fixed');
    }
});
$(document).ready(function() {
  $('.language').click(function(event) {
      event.preventDefault();
      $('.language_view').toggleClass('view').siblings().removeClass('view');
      $('.language_img').toggleClass('view_img').siblings().removeClass('view_img');
  });
});
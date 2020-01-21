$('.mobile_burger').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $(".header_menu_links").toggleClass('menu_show');
});
$('.mobile_burger').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $(".header_menu_links").toggleClass('menu_show');
  $(".mobile_burger_project").toggleClass('mobile_burger_project_active');
  $(".header_project .logo_mobile").toggle();
  $(".header_project .project_logo_mobile").toggle();
  $("html,body").toggleClass('overflow');


});

$('.slider').slick({
  centerMode: true,
  centerPadding: '400rem',
  slidesToShow: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});